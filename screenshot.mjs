import puppeteer from 'puppeteer';
import { mkdirSync, readdirSync } from 'fs';
import { join } from 'path';

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const dir = join(import.meta.dirname, 'temporary screenshots');
mkdirSync(dir, { recursive: true });

const existing = readdirSync(dir).filter(f => f.startsWith('screenshot-'));
const num = existing.length + 1;
const filename = label
  ? `screenshot-${num}-${label}.png`
  : `screenshot-${num}.png`;

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Slowly scroll through the page to trigger IntersectionObserver / whileInView
await page.evaluate(async () => {
  const delay = ms => new Promise(r => setTimeout(r, ms));
  const step = 300;
  const height = document.body.scrollHeight;
  for (let y = 0; y <= height; y += step) {
    window.scrollTo(0, y);
    await delay(150);
  }
  // Scroll back to top
  window.scrollTo(0, 0);
  await delay(500);
});

// Wait for animations to settle
await new Promise(r => setTimeout(r, 1500));

await page.screenshot({ path: join(dir, filename), fullPage: true });
console.log(`Screenshot saved: temporary screenshots/${filename}`);
await browser.close();
