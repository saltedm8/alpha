/**
 * Scrapes review avatars from alphaarchitectsltd.co.uk/reviews/
 * Run: npx playwright install chromium && node scripts/download-review-avatars.js
 *
 * Requires: npm install playwright
 */
import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const URL = 'https://alphaarchitectsltd.co.uk/reviews/';

async function main() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(5000); // Wait for Elfsight widgets to load

    const avatars = await page.evaluate(() => {
      const imgs = document.querySelectorAll('img[src*="googleusercontent"], img[src*="lh3."], img[src*="avatar"], img[src*="profile"], img[src*="hzcdn"], img[src*="houzz"]');
      return [...imgs].map((img) => ({
        src: img.src,
        alt: img.alt || '',
      })).filter((a) => a.src && !a.src.includes('logo'));
    });

    console.log('Found', avatars.length, 'avatar(s)');
    avatars.forEach((a, i) => console.log(i + 1, a.src));

    const output = join(__dirname, '..', 'review-avatars.json');
    writeFileSync(output, JSON.stringify(avatars, null, 2));
    console.log('Saved to', output);
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
}

main();
