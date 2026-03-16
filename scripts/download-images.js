/**
 * Downloads all images from alphaarchitectsltd.co.uk into public/images/uploads/
 * Run: node scripts/download-images.js
 */
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://alphaarchitectsltd.co.uk/wp-content/uploads';
const OUT_DIR = join(__dirname, '..', 'public', 'images', 'uploads');

// Extract all unique image paths from siteData.js
const siteData = readFileSync(join(__dirname, '..', 'src', 'data', 'siteData.js'), 'utf8');
// Match paths like 2025/10/2-copy.jpg (YYYY/MM/filename) from ${UPLOADS}/path
const pathRe = /(?:\$\{UPLOADS\}\/|\/wp-content\/uploads\/)(\d{4}\/\d{2}\/[^`'"]+?)(?=`|'|"|\)|,|\])/g;
const paths = [...new Set([...siteData.matchAll(pathRe)].map((m) => m[1].trim()))];

console.log(`Found ${paths.length} unique image paths`);

async function download(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

let ok = 0;
let fail = 0;
for (const rel of paths) {
  const url = `${BASE}/${rel}`;
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
console.log(`\nDone. ${ok} ok, ${fail} failed`);
