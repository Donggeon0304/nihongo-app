const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function renderIcons() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const svgPath = path.join(__dirname, '..', 'public', 'icons', 'icon.svg');
  const svgContent = fs.readFileSync(svgPath, 'utf8');

  // 192x192
  await page.setViewportSize({ width: 192, height: 192 });
  await page.setContent(`<!DOCTYPE html><html><body style="margin:0;padding:0;overflow:hidden;">${svgContent.replace('width="512"', 'width="192"').replace('height="512"', 'height="192"')}</body></html>`);
  await page.screenshot({ path: path.join(__dirname, '..', 'public', 'icons', 'icon-192.png') });
  console.log('Generated icon-192.png');

  // 512x512
  await page.setViewportSize({ width: 512, height: 512 });
  await page.setContent(`<!DOCTYPE html><html><body style="margin:0;padding:0;overflow:hidden;">${svgContent}</body></html>`);
  await page.screenshot({ path: path.join(__dirname, '..', 'public', 'icons', 'icon-512.png') });
  console.log('Generated icon-512.png');

  // favicon 및 apple-touch-icon
  await page.screenshot({ path: path.join(__dirname, '..', 'public', 'apple-touch-icon.png') });

  await browser.close();
}

renderIcons().catch(console.error);
