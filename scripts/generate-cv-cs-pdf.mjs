import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';

const browser = await chromium.launch({ headless: true });
const variants = [
  ['cs', 'Tereza-Britta-Svanda-CV-CS-October-2026.pdf'],
  ['en', 'Tereza-Britta-Svanda-CV-EN-September-2026.pdf'],
  ['de', 'Tereza-Britta-Svanda-CV-DE-September-2026.pdf'],
];

for (const [language, filename] of variants) {
  const page = await browser.newPage();
  const output = fileURLToPath(new URL(`../src/assets/cv/${filename}`, import.meta.url));

  await page.goto(`http://localhost:8082/cv/print/${language}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => [...document.images].every((image) => image.complete && image.naturalWidth > 0));
  await page.pdf({
    path: output,
    format: 'A4',
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    printBackground: true,
    preferCSSPageSize: true,
  });
  await page.close();
}

await browser.close();
