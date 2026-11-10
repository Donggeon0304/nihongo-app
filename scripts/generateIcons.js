const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '..', 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// SVG 아이콘 생성
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="128" fill="url(#grad)" />
  <circle cx="256" cy="256" r="210" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="8" />
  <text x="256" y="340" font-family="-apple-system, BlinkMacSystemFont, 'Hiragino Kaku Gothic ProN', sans-serif" font-size="240" font-weight="900" fill="#ffffff" text-anchor="middle">日</text>
  <circle cx="380" cy="140" r="28" fill="#ffffff" opacity="0.9" />
  <circle cx="360" cy="180" r="16" fill="#ffffff" opacity="0.6" />
  <circle cx="410" cy="180" r="14" fill="#ffffff" opacity="0.6" />
</svg>`;

fs.writeFileSync(path.join(iconsDir, 'icon.svg'), svgContent, 'utf8');
console.log('Created icon.svg');
