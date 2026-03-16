/**
 * Scrapes development project pages from alphaarchitectsltd.co.uk,
 * extracts image URLs, downloads them, and updates siteData.js.
 * Run: node scripts/download-development-images.js
 */
import { readFileSync, writeFileSync, mkdirSync, writeFileSync as wfs, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://alphaarchitectsltd.co.uk';
const UPLOADS_BASE = 'https://alphaarchitectsltd.co.uk/wp-content/uploads';
const OUT_DIR = join(__dirname, '..', 'public', 'images', 'uploads');
const SITE_DATA_PATH = join(__dirname, '..', 'src', 'data', 'siteData.js');

const developmentSlugs = [
  'whitehall',
  'high-street-loughton',
  'high-street-harlow',
  'horn',
  'copenhagen',
  'hanley',
  'new-city',
  'swan',
];

// Extract image URLs from HTML (wp-content/uploads paths)
function extractImageUrls(html) {
  const urls = new Set();
  const re = /https?:\/\/[^"'\s]*wp-content\/uploads\/(\d{4}\/\d{2}\/[^"'\s?]+\.(?:jpg|jpeg|png|webp|gif))/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const path = m[1].replace(/\?.*$/, '').trim();
    if (!path.includes('-150x') && !path.includes('-100x') && !path.includes('-50x')) {
      urls.add(path);
    }
  }
  return [...urls];
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function download(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  const allPaths = new Set();

  // 1. Fetch development listing page
  console.log('Fetching development listing page...');
  try {
    const listHtml = await fetchHtml(`${BASE}/development-2/`);
    const listUrls = extractImageUrls(listHtml);
    listUrls.forEach((p) => allPaths.add(p));
    console.log(`  Found ${listUrls.length} images on listing`);
  } catch (e) {
    console.error('  Failed:', e.message);
  }

  // 2. Fetch each project page
  for (const slug of developmentSlugs) {
    const url = `${BASE}/project/${slug}/`;
    try {
      const html = await fetchHtml(url);
      const urls = extractImageUrls(html);
      urls.forEach((p) => allPaths.add(p));
      console.log(`  ${slug}: ${urls.length} images`);
    } catch (e) {
      console.log(`  ${slug}: failed - ${e.message}`);
    }
  }

  const paths = [...allPaths].sort();
  console.log(`\nTotal unique images to download: ${paths.length}`);

  // 3. Download each image
  let ok = 0;
  let fail = 0;
  for (const rel of paths) {
    const url = `${UPLOADS_BASE.replace('/wp-content/uploads', '')}/wp-content/uploads/${rel}`;
    const outPath = join(OUT_DIR, rel);
    if (existsSync(outPath)) {
      ok++;
      continue;
    }
    try {
      mkdirSync(dirname(outPath), { recursive: true });
      const buf = await download(url);
      wfs(outPath, buf);
      ok++;
      process.stdout.write('.');
    } catch (e) {
      fail++;
      console.error(`\nFailed: ${rel} - ${e.message}`);
    }
  }
  console.log(`\nDownloaded: ${ok} ok, ${fail} failed`);

  // 4. Map first image per project for list thumbnails (from project pages)
  const projectFirstImage = {};
  for (const slug of developmentSlugs) {
    const url = `${BASE}/project/${slug}/`;
    try {
      const html = await fetchHtml(url);
      const urls = extractImageUrls(html);
      const fullSize = urls
        .filter((p) => !p.includes('-150x') && !p.includes('-100x') && !p.includes('-50x') && !p.includes('-300x'))
        .filter((p) => !p.includes('elementor/thumbs'));
      if (fullSize.length > 0) {
        projectFirstImage[slug] = fullSize[0];
      }
    } catch (_) {}
  }

  console.log('\nProject -> first image (for siteData devImgs):');
  for (const [slug, path] of Object.entries(projectFirstImage)) {
    console.log(`  ${slug}: ${path}`);
  }

  // 5. Update siteData.js devImgs if we found images
  if (Object.keys(projectFirstImage).length > 0) {
    const siteData = readFileSync(SITE_DATA_PATH, 'utf8');
    const fallbacks = {
      whitehall: '2000/03/08.jpg',
      'high-street-loughton': '2000/03/01-1024x768.jpg',
      'high-street-harlow': '2000/03/001-2-1024x724.jpg',
      horn: '2025/05/development-thumbnails-1024x772.webp',
      copenhagen: '2025/05/development-thumbnails-1024x772.webp',
      hanley: '2025/05/development-thumbnails-1024x772.webp',
      'new-city': '2025/05/development-thumbnails-1024x772.webp',
      swan: '2025/05/development-thumbnails-1024x772.webp',
    };
    const devImgsLines = developmentSlugs.map((slug) => {
      const path = projectFirstImage[slug] || fallbacks[slug];
      const key = slug.includes('-') ? `'${slug}'` : slug;
      return `      ${key}: \`\${UPLOADS}/${path}\`,`;
    });
    const newDevImgs = `    const devImgs = {\n${devImgsLines.join('\n')}\n    };`;
    const oldDevImgsRe = /    const devImgs = \{[\s\S]*?\n    \};/;
    const updated = siteData.replace(oldDevImgsRe, newDevImgs);
    writeFileSync(SITE_DATA_PATH, updated);
    console.log('\nUpdated siteData.js devImgs');
  }
}

main().catch(console.error);
