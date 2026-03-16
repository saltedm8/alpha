/**
 * Optimizes images in public/images/uploads/ using Sharp.
 * Run: npm run optimize-images
 * Requires: npm install sharp --save-dev
 *
 * Reads each file into a buffer first (avoids Windows file-lock issues),
 * then optimizes and overwrites only if smaller.
 */
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const UPLOADS_DIR = join(__dirname, '..', 'public', 'images', 'uploads');

const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const JPEG_QUALITY = 82;
const PNG_QUALITY = 85;
const WEBP_QUALITY = 82;
const MAX_WIDTH = 1920;

function* walkDir(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) yield* walkDir(full);
    else if (EXTENSIONS.includes(extname(e.name).toLowerCase())) yield full;
  }
}

async function optimize() {
  let sharp;
  try {
    sharp = (await import('sharp')).default;
  } catch {
    console.error('Sharp not found. Run: npm install sharp --save-dev');
    process.exit(1);
  }

  const files = [...walkDir(UPLOADS_DIR)];
  console.log(`Optimizing ${files.length} images...`);

  let saved = 0;
  let totalSaved = 0;
  let failed = 0;

  for (const file of files) {
    try {
      const ext = extname(file).toLowerCase();
      const input = readFileSync(file);
      const before = input.length;

      let pipeline = sharp(input);
      const meta = await pipeline.metadata();
      const width = meta.width || 0;

      if (width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: WEBP_QUALITY });
      }

      const buf = await pipeline.toBuffer();
      const after = buf.length;

      if (after < before) {
        writeFileSync(file, buf);
        totalSaved += before - after;
        saved++;
        process.stdout.write('.');
      }
    } catch (e) {
      failed++;
      if (failed <= 5) console.error(`\nFailed: ${file} - ${e.message}`);
    }
  }

  if (failed > 5) console.error(`\n... and ${failed - 5} more failures`);
  console.log(`\nDone. ${saved} optimized, ${(totalSaved / 1024).toFixed(1)} KB saved.${failed ? ` (${failed} skipped)` : ''}`);
}

optimize().catch(console.error);
