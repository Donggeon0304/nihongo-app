const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'src', 'components', 'QuizRunner.tsx');
let content = fs.readFileSync(targetPath, 'utf8');

// 1. 문제 생성 시 한글 발음 라벨
const oldBlock1 = `      if (questionType === 'kanji_to_meaning') {
        correctLabel = word.meaning;
        wrongLabels = shuffledWrong.map((w) => w.meaning);
      } else if (questionType === 'meaning_to_kanji') {
        correctLabel = \`\${word.kanji} (\${word.kana})\`;
        wrongLabels = shuffledWrong.map((w) => \`\${w.kanji} (\${w.kana})\`);
      } else {
        // listening
        correctLabel = \`\${word.meaning} [\${word.kanji}]\`;
        wrongLabels = shuffledWrong.map((w) => \`\${w.meaning} [\${w.kanji}]\`);
      }`;

const newBlock1 = `      if (questionType === 'kanji_to_meaning') {
        correctLabel = word.meaning;
        wrongLabels = shuffledWrong.map((w) => w.meaning);
      } else if (questionType === 'meaning_to_kanji') {
        const hangul = showHangulHint ? \` [\${kanaToHangul(word.kana)}]\` : '';
        correctLabel = \`\${word.kanji} (\${word.kana})\${hangul}\`;
        wrongLabels = shuffledWrong.map((w) => {
          const wHangul = showHangulHint ? \` [\${kanaToHangul(w.kana)}]\` : '';
          return \`\${w.kanji} (\${w.kana})\${wHangul}\`;
        });
      } else {
        // listening
        const hangul = showHangulHint ? \` [\${kanaToHangul(word.kana)}]\` : '';
        correctLabel = \`\${word.meaning} [\${word.kanji}]\${hangul}\`;
        wrongLabels = shuffledWrong.map((w) => {
          const wHangul = showHangulHint ? \` [\${kanaToHangul(w.kana)}]\` : '';
          return \`\${word.meaning} [\${w.kanji}]\${wHangul}\`;
        });
      }`;

content = content.replace(/\r\n/g, '\n');
content = content.replace(oldBlock1.replace(/\r\n/g, '\n'), newBlock1);

// 2. 문제 설정 영역에 한글 발음 모드 토글 추가
const oldSetting = `          {/* 문제 유형 선택 */}`;
const newSetting = `          {/* 4. 왕초보 한글 발음 힌트 모드 토글 */}
          <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/60 flex items-center justify-between">
            <div>
              <span className="font-bold text-xs text-amber-900 dark:text-amber-200 block">
                왕초보 모드: 친절한 한글 발음 표시
              </span>
              <span className="text-[11px] text-amber-700/80 dark:text-amber-400">
                히라가나/한자를 몰라도 소리(한글 발음)로 회화 단어를 맞출 수 있습니다.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowHangulHint(!showHangulHint)}
              className={\`px-3 py-1.5 rounded-xl text-xs font-bold transition-all \${
                showHangulHint
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600'
              }\`}
            >
              {showHangulHint ? '켜짐 🟢' : '꺼짐'}
            </button>
          </div>

          {/* 문제 유형 선택 */}`;

content = content.replace(oldSetting, newSetting);

// 3. 문제 화면에서 한글 발음 큼직하게 표시
const oldQuestionCard = `<h2 className="text-5xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
                  {currentQ.word.kanji}
                </h2>
                {currentQ.word.kanji !== currentQ.word.kana && (
                  <div className="text-lg font-semibold text-rose-500">
                    {currentQ.word.kana}
                  </div>
                )}`;

const newQuestionCard = `<h2 className="text-5xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
                  {currentQ.word.kanji}
                </h2>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {currentQ.word.kanji !== currentQ.word.kana && (
                    <span className="text-lg font-semibold text-rose-500">
                      {currentQ.word.kana}
                    </span>
                  )}
                  {showHangulHint && (
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 font-black text-sm">
                      발음: [{kanaToHangul(currentQ.word.kana)}]
                    </span>
                  )}
                </div>`;

content = content.replace(oldQuestionCard, newQuestionCard);

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully updated QuizRunner.tsx with Hangul support!');
