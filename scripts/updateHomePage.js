const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(targetPath, 'utf8').replace(/\r\n/g, '\n');

if (!content.includes('kanaToHangul')) {
  content = content.replace(
    "import { playJapaneseSpeech } from '@/lib/speech';",
    "import { playJapaneseSpeech } from '@/lib/speech';\nimport { kanaToHangul } from '@/lib/kanaToHangul';"
  );
}

const oldWordBlock = `<div className="text-xs text-zinc-400">[{word.romaji}]</div>`;
const newWordBlock = `<div className="text-xs text-zinc-400 flex items-center gap-1.5 flex-wrap">
                  <span>[{word.romaji}]</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">[{kanaToHangul(word.kana)}]</span>
                </div>`;

content = content.replace(oldWordBlock, newWordBlock);

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully updated Home page with Hangul support!');
