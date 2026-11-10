const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function convertIcons() {
  const svgPath = path.join(__dirname, '..', 'public', 'icons', 'icon.svg');
  const outDir = path.join(__dirname, '..', 'public', 'icons');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 192x192 PNG
  await sharp(svgPath)
    .resize(192, 192)
    .png()
    .toFile(path.join(outDir, 'icon-192.png'));
  console.log('Created icon-192.png');

  // 512x512 PNG
  await sharp(svgPath)
    .resize(512, 512)
    .png()
    .toFile(path.join(outDir, 'icon-512.png'));
  console.log('Created icon-512.png');

  // apple-touch-icon
  await sharp(svgPath)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');
}

convertIcons().catch(console.error);
