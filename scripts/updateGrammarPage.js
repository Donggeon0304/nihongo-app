const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'src', 'app', 'grammar', 'page.tsx');
let content = fs.readFileSync(targetPath, 'utf8').replace(/\r\n/g, '\n');

// kanaToHangul 임포트 추가
if (!content.includes('kanaToHangul')) {
  content = content.replace(
    "import { playJapaneseSpeech } from '@/lib/speech';",
    "import { playJapaneseSpeech } from '@/lib/speech';\nimport { kanaToHangul } from '@/lib/kanaToHangul';"
  );
}

// 예문 렌더링에 한글 발음 추가
const oldExampleBlock = `<div className="text-xs text-rose-500 font-medium">
                          {ex.reading}
                        </div>`;

const newExampleBlock = `<div className="text-xs text-rose-500 font-medium">
                          {ex.reading}
                        </div>
                        <div className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
                          발음: [{kanaToHangul(ex.reading)}]
                        </div>`;

content = content.replace(oldExampleBlock, newExampleBlock);

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully updated Grammar page with Hangul support!');
