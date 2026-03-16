/**
 * Scrapes ALL project pages from alphaarchitectsltd.co.uk,
 * downloads images, and updates projectDetailExtras galleries.
 * Run: node scripts/download-all-project-images.js
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://alphaarchitectsltd.co.uk';
const UPLOADS_BASE = 'https://alphaarchitectsltd.co.uk/wp-content/uploads';
const OUT_DIR = join(__dirname, '..', 'public', 'images', 'uploads');
const SITE_DATA_PATH = join(__dirname, '..', 'src', 'data', 'siteData.js');

// Extract all project slugs from siteData
const projectSlug = (name) => {
  const map = {
    'Knighton': 'knighton', 'Warren': 'warren', 'Hainault': 'hainault', 'Elmcroft': 'elmcroft',
    'Malvern (2)': 'malvern', 'Spareleaze': 'spareleaze', 'Duchess': 'duchess', 'Eglington': 'eglington',
    'Loud & Proud': 'loud-proud', 'Coolgardie': 'coolgardie', 'Palmerston': 'palmerston', 'Garden': 'garden',
    'Barns': 'barns', 'Malvern': 'malvern', 'Roebuck': 'roebuck', 'Princes (2)': 'princes',
    'Meadway': 'meadway', 'Kings': 'kings', 'Luctons': 'luctons', 'Princes': 'princes',
    'Baldwins': 'baldwins', 'Spring': 'spring', 'Grovewood': 'grovewood', 'Ravensmere': 'ravensmere',
    'Calabria': 'calabria', 'Clifton': 'clifton', 'Grove': 'grove', 'Barry': 'barry',
    'Burstead': 'burstead', 'Millennium': 'millennium', 'Wormersley': 'wormersley',
    'Storers': 'storers', 'Cloudesley': 'cloudesley', 'Glengall': 'glengall', 'Roding': 'roding',
    'Whitehall': 'whitehall', 'High Street – Loughton': 'high-street-loughton',
    'High Street – Harlow': 'high-street-harlow', 'Horn': 'horn', 'Copenhagen': 'copenhagen',
    'Hanley': 'hanley', 'New City': 'new-city', 'Swan': 'swan',
  };
  return map[name] || name.toLowerCase().replace(/\s+/g, '-').replace(/[–—]/g, '-');
};

const residentialNames = ['Knighton', 'Warren', 'Hainault', 'Elmcroft', 'Malvern (2)', 'Spareleaze', 'Duchess', 'Eglington', 'Loud & Proud', 'Coolgardie', 'Palmerston', 'Garden', 'Barns', 'Malvern', 'Roebuck', 'Princes (2)', 'Meadway', 'Kings', 'Luctons', 'Princes', 'Baldwins', 'Spring', 'Grovewood', 'Ravensmere', 'Calabria', 'Clifton', 'Grove', 'Barry', 'Burstead', 'Millennium', 'Wormersley', 'Storers', 'Cloudesley', 'Glengall', 'Roding'];
const commercialSlugs = ['sad-meli', 'dream-nails', 'trafalger', 'charity-offices', 'ninth-ward-bar-restaurant', 'green-owl'];
const developmentNames = ['Whitehall', 'High Street – Loughton', 'High Street – Harlow', 'Horn', 'Copenhagen', 'Hanley', 'New City', 'Swan'];
const communitySlugs = ['stephens-church', 'buckhurst-hill-primary-school', 'st-saviours-school'];

const allSlugs = [
  ...residentialNames.map(projectSlug),
  ...commercialSlugs,
  ...developmentNames.map(projectSlug),
  ...communitySlugs,
].filter((s, i, a) => a.indexOf(s) === i);

function extractImagePaths(html) {
  const paths = [];
  const re = /https?:\/\/[^"'\s]*wp-content\/uploads\/(\d{4}\/\d{2}\/[^"'\s?]+\.(?:jpg|jpeg|png|webp|gif))/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const path = m[1].replace(/\?.*$/, '').trim();
    if (!path.includes('-150x') && !path.includes('-100x') && !path.includes('-50x') && !path.includes('-75x') &&
        !path.includes('-300x') && !path.includes('-768x') && !path.includes('-225x') && !path.includes('-576x') &&
        !path.includes('-1152x') && !path.includes('-212x') && !path.includes('-543x') && !path.includes('-512x')) {
      if (!path.includes('elementor/thumbs')) {
        paths.push(path);
      }
    }
  }
  return paths;
}

// Get content-only images: exclude logo, nav, common UI (often at start/end of doc)
function getContentImages(paths) {
  const exclude = ['logo', 'alpha-architects', 'boh20', 'riba-logo', 'grand-designs', 'hbrshow', 'ideal-home', 'nic-antony-architects-final'];
  return paths.filter((p) => !exclude.some((e) => p.toLowerCase().includes(e)));
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
  const projectGalleries = {};

  console.log(`Fetching ${allSlugs.length} project pages...\n`);

  for (const slug of allSlugs) {
    const url = `${BASE}/project/${slug}/`;
    try {
      const html = await fetchHtml(url);
      const paths = extractImagePaths(html);
      const contentPaths = getContentImages(paths);
      paths.forEach((p) => allPaths.add(p));

      if (contentPaths.length > 0) {
        projectGalleries[slug] = [...new Set(contentPaths)];
        console.log(`  ${slug}: ${projectGalleries[slug].length} images`);
      } else {
        console.log(`  ${slug}: 0 content images (${paths.length} total)`);
      }
    } catch (e) {
      console.log(`  ${slug}: failed - ${e.message}`);
    }
  }

  const paths = [...allPaths].sort();
  console.log(`\nTotal unique images to download: ${paths.length}`);

  let ok = 0;
  let fail = 0;
  for (const rel of paths) {
    const url = `${UPLOADS_BASE}/${rel}`;
    const outPath = join(OUT_DIR, rel);
    if (existsSync(outPath)) {
      ok++;
      continue;
    }
    try {
      mkdirSync(dirname(outPath), { recursive: true });
      const buf = await download(url);
      writeFileSync(outPath, buf);
      ok++;
      process.stdout.write('.');
    } catch (e) {
      fail++;
      console.error(`\nFailed: ${rel} - ${e.message}`);
    }
  }
  console.log(`\nDownloaded: ${ok} ok, ${fail} failed`);

  // Update projectDetailExtras galleries for projects that have images
  let siteData = readFileSync(SITE_DATA_PATH, 'utf8');
  let updatedCount = 0;

  for (const [slug, gallery] of Object.entries(projectGalleries)) {
    if (gallery.length === 0) continue;

    const galleryStr = gallery.map((p) => `\${UPLOADS}/${p}`).join('`, `');
    const newGalleryBlock = `gallery: [\n      \`${galleryStr}\`,\n    ]`;

    const slugKey = `'${slug}'`;
    const entryStart = `  ${slugKey}: {`;
    const extrasStart = siteData.indexOf('export const projectDetailExtras = {');
    let idx = siteData.indexOf(entryStart, extrasStart);

    if (idx === -1 || idx < extrasStart) {
      // Add new entry - insert before closing }; of projectDetailExtras
      const contactIdx = siteData.indexOf('export const contactContent');
      const closingMatch = siteData.slice(extrasStart, contactIdx).match(/\n};[\s\n]*$/);
      if (!closingMatch) continue;
      const insertBefore = extrasStart + closingMatch.index;
      const newEntry = `  ${slugKey}: {\n    description: 'Project.',\n    ${newGalleryBlock},\n  },\n`;
      siteData = siteData.slice(0, insertBefore) + newEntry + siteData.slice(insertBefore);
      updatedCount++;
      console.log(`  Added ${slug} (${gallery.length} images)`);
      continue;
    }

    const afterEntry = siteData.slice(idx);
    const galleryMatch = afterEntry.match(/gallery: \[[\s\S]*?\]\s*,/);
    if (!galleryMatch) continue;

    const oldGallery = galleryMatch[0];
    const newEntry = afterEntry.replace(oldGallery, newGalleryBlock + ',');
    siteData = siteData.slice(0, idx) + newEntry;
    updatedCount++;
    console.log(`  Updated ${slug} (${gallery.length} images)`);
  }

  if (updatedCount > 0) {
    writeFileSync(SITE_DATA_PATH, siteData);
    console.log(`\nUpdated ${updatedCount} project galleries in siteData.js`);
  }
  console.log('\nDone.');
}

main().catch(console.error);
