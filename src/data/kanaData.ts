export interface KanaItem {
  id: string;
  hiragana: string;
  katakana: string;
  romaji: string;
  korean: string;
  rowKey: string;
  rowName: string;
  type: 'seion' | 'dakuon' | 'handakuon';
}

export interface KanaRowMeta {
  key: string;
  name: string;
  desc: string;
  type: 'seion' | 'dakuon' | 'handakuon';
}

export const KANA_ROWS: KanaRowMeta[] = [
  // 청음 (기본 10행)
  { key: 'a', name: '아행 (あ/ア)', desc: 'あ い う え お', type: 'seion' },
  { key: 'ka', name: '카행 (か/カ)', desc: 'か き く け こ', type: 'seion' },
  { key: 'sa', name: '사행 (さ/サ)', desc: 'さ し す せ そ', type: 'seion' },
  { key: 'ta', name: '타행 (た/タ)', desc: 'た ち つ て と', type: 'seion' },
  { key: 'na', name: '나행 (な/ナ)', desc: 'な に ぬ ね の', type: 'seion' },
  { key: 'ha', name: '하행 (は/ハ)', desc: 'は ひ ふ へ ほ', type: 'seion' },
  { key: 'ma', name: '마행 (ま/マ)', desc: 'ま み む め も', type: 'seion' },
  { key: 'ya', name: '야행 (や/ヤ)', desc: 'や ゆ よ', type: 'seion' },
  { key: 'ra', name: '라행 (ら/ラ)', desc: 'ら り る れ ろ', type: 'seion' },
  { key: 'wa', name: '와행 (わ/ワ)', desc: 'わ を ん', type: 'seion' },

  // 탁음
  { key: 'ga', name: '가행 (が/ガ)', desc: 'が ぎ ぐ げ ご', type: 'dakuon' },
  { key: 'za', name: '자행 (ざ/ザ)', desc: 'ざ じ ず ぜ ぞ', type: 'dakuon' },
  { key: 'da', name: '다행 (だ/ダ)', desc: 'だ ぢ づ で ど', type: 'dakuon' },
  { key: 'ba', name: '바행 (ば/バ)', desc: 'ば び ぶ べ ぼ', type: 'dakuon' },

  // 반탁음
  { key: 'pa', name: '파행 (ぱ/パ)', desc: 'ぱ ぴ ぷ ぺ ぽ', type: 'handakuon' },
];

export const KANA_DATA: KanaItem[] = [
  // --- 청음 (50음도 기본) ---
  // 아행
  { id: 'a', hiragana: 'あ', katakana: 'ア', romaji: 'a', korean: '아', rowKey: 'a', rowName: '아행', type: 'seion' },
  { id: 'i', hiragana: 'い', katakana: 'イ', romaji: 'i', korean: '이', rowKey: 'a', rowName: '아행', type: 'seion' },
  { id: 'u', hiragana: 'う', katakana: 'ウ', romaji: 'u', korean: '우', rowKey: 'a', rowName: '아행', type: 'seion' },
  { id: 'e', hiragana: 'え', katakana: 'エ', romaji: 'e', korean: '에', rowKey: 'a', rowName: '아행', type: 'seion' },
  { id: 'o', hiragana: 'お', katakana: 'オ', romaji: 'o', korean: '오', rowKey: 'a', rowName: '아행', type: 'seion' },

  // 카행
  { id: 'ka', hiragana: 'か', katakana: 'カ', romaji: 'ka', korean: '카', rowKey: 'ka', rowName: '카행', type: 'seion' },
  { id: 'ki', hiragana: 'き', katakana: 'キ', romaji: 'ki', korean: '키', rowKey: 'ka', rowName: '카행', type: 'seion' },
  { id: 'ku', hiragana: 'く', katakana: 'ク', romaji: 'ku', korean: '쿠', rowKey: 'ka', rowName: '카행', type: 'seion' },
  { id: 'ke', hiragana: 'け', katakana: 'ケ', romaji: 'ke', korean: '케', rowKey: 'ka', rowName: '카행', type: 'seion' },
  { id: 'ko', hiragana: 'こ', katakana: 'コ', romaji: 'ko', korean: '코', rowKey: 'ka', rowName: '카행', type: 'seion' },

  // 사행
  { id: 'sa', hiragana: 'さ', katakana: 'サ', romaji: 'sa', korean: '사', rowKey: 'sa', rowName: '사행', type: 'seion' },
  { id: 'shi', hiragana: 'し', katakana: 'シ', romaji: 'shi', korean: '시', rowKey: 'sa', rowName: '사행', type: 'seion' },
  { id: 'su', hiragana: 'す', katakana: 'ス', romaji: 'su', korean: '스', rowKey: 'sa', rowName: '사행', type: 'seion' },
  { id: 'se', hiragana: 'せ', katakana: 'セ', romaji: 'se', korean: '세', rowKey: 'sa', rowName: '사행', type: 'seion' },
  { id: 'so', hiragana: 'そ', katakana: 'ソ', romaji: 'so', korean: '소', rowKey: 'sa', rowName: '사행', type: 'seion' },

  // 타행
  { id: 'ta', hiragana: 'た', katakana: 'タ', romaji: 'ta', korean: '타', rowKey: 'ta', rowName: '타행', type: 'seion' },
  { id: 'chi', hiragana: 'ち', katakana: 'チ', romaji: 'chi', korean: '치', rowKey: 'ta', rowName: '타행', type: 'seion' },
  { id: 'tsu', hiragana: 'つ', katakana: 'ツ', romaji: 'tsu', korean: '츠', rowKey: 'ta', rowName: '타행', type: 'seion' },
  { id: 'te', hiragana: 'て', katakana: 'テ', romaji: 'te', korean: '테', rowKey: 'ta', rowName: '타행', type: 'seion' },
  { id: 'to', hiragana: 'と', katakana: 'ト', romaji: 'to', korean: '토', rowKey: 'ta', rowName: '타행', type: 'seion' },

  // 나행
  { id: 'na', hiragana: 'な', katakana: 'ナ', romaji: 'na', korean: '나', rowKey: 'na', rowName: '나행', type: 'seion' },
  { id: 'ni', hiragana: 'に', katakana: 'ニ', romaji: 'ni', korean: '니', rowKey: 'na', rowName: '나행', type: 'seion' },
  { id: 'nu', hiragana: 'ぬ', katakana: 'ヌ', romaji: 'nu', korean: '누', rowKey: 'na', rowName: '나행', type: 'seion' },
  { id: 'ne', hiragana: 'ね', katakana: 'ネ', romaji: 'ne', korean: '네', rowKey: 'na', rowName: '나행', type: 'seion' },
  { id: 'no', hiragana: 'の', katakana: 'ノ', romaji: 'no', korean: '노', rowKey: 'na', rowName: '나행', type: 'seion' },

  // 하행
  { id: 'ha', hiragana: 'は', katakana: 'ハ', romaji: 'ha', korean: '하', rowKey: 'ha', rowName: '하행', type: 'seion' },
  { id: 'hi', hiragana: 'ひ', katakana: 'ヒ', romaji: 'hi', korean: '히', rowKey: 'ha', rowName: '하행', type: 'seion' },
  { id: 'fu', hiragana: 'ふ', katakana: 'フ', romaji: 'fu', korean: '후', rowKey: 'ha', rowName: '하행', type: 'seion' },
  { id: 'he', hiragana: 'へ', katakana: 'ヘ', romaji: 'he', korean: '헤', rowKey: 'ha', rowName: '하행', type: 'seion' },
  { id: 'ho', hiragana: 'ほ', katakana: 'ホ', romaji: 'ho', korean: '호', rowKey: 'ha', rowName: '하행', type: 'seion' },

  // 마행
  { id: 'ma', hiragana: 'ま', katakana: 'マ', romaji: 'ma', korean: '마', rowKey: 'ma', rowName: '마행', type: 'seion' },
  { id: 'mi', hiragana: 'み', katakana: 'ミ', romaji: 'mi', korean: '미', rowKey: 'ma', rowName: '마행', type: 'seion' },
  { id: 'mu', hiragana: 'む', katakana: 'ム', romaji: 'mu', korean: '무', rowKey: 'ma', rowName: '마행', type: 'seion' },
  { id: 'me', hiragana: 'め', katakana: 'メ', romaji: 'me', korean: '메', rowKey: 'ma', rowName: '마행', type: 'seion' },
  { id: 'mo', hiragana: 'も', katakana: 'モ', romaji: 'mo', korean: '모', rowKey: 'ma', rowName: '마행', type: 'seion' },

  // 야행
  { id: 'ya', hiragana: 'や', katakana: 'ヤ', romaji: 'ya', korean: '야', rowKey: 'ya', rowName: '야행', type: 'seion' },
  { id: 'yu', hiragana: 'ゆ', katakana: 'ユ', romaji: 'yu', korean: '유', rowKey: 'ya', rowName: '야행', type: 'seion' },
  { id: 'yo', hiragana: 'よ', katakana: 'ヨ', romaji: 'yo', korean: '요', rowKey: 'ya', rowName: '야행', type: 'seion' },

  // 라행
  { id: 'ra', hiragana: 'ら', katakana: 'ラ', romaji: 'ra', korean: '라', rowKey: 'ra', rowName: '라행', type: 'seion' },
  { id: 'ri', hiragana: 'り', katakana: 'リ', romaji: 'ri', korean: '리', rowKey: 'ra', rowName: '라행', type: 'seion' },
  { id: 'ru', hiragana: 'る', katakana: 'ル', romaji: 'ru', korean: '루', rowKey: 'ra', rowName: '라행', type: 'seion' },
  { id: 're', hiragana: 'れ', katakana: 'レ', romaji: 're', korean: '레', rowKey: 'ra', rowName: '라행', type: 'seion' },
  { id: 'ro', hiragana: 'ろ', katakana: 'ロ', romaji: 'ro', korean: '로', rowKey: 'ra', rowName: '라행', type: 'seion' },

  // 와행 / 응
  { id: 'wa', hiragana: 'わ', katakana: 'ワ', romaji: 'wa', korean: '와', rowKey: 'wa', rowName: '와행', type: 'seion' },
  { id: 'wo', hiragana: 'を', katakana: 'ヲ', romaji: 'wo', korean: '오/워', rowKey: 'wa', rowName: '와행', type: 'seion' },
  { id: 'n', hiragana: 'ん', katakana: 'ン', romaji: 'n', korean: '응', rowKey: 'wa', rowName: '와행', type: 'seion' },

  // --- 탁음 ---
  // 가행
  { id: 'ga', hiragana: 'が', katakana: 'ガ', romaji: 'ga', korean: '가', rowKey: 'ga', rowName: '가행', type: 'dakuon' },
  { id: 'gi', hiragana: 'ぎ', katakana: 'ギ', romaji: 'gi', korean: '기', rowKey: 'ga', rowName: '가행', type: 'dakuon' },
  { id: 'gu', hiragana: 'ぐ', katakana: 'グ', romaji: 'gu', korean: '구', rowKey: 'ga', rowName: '가행', type: 'dakuon' },
  { id: 'ge', hiragana: 'げ', katakana: 'ゲ', romaji: 'ge', korean: '게', rowKey: 'ga', rowName: '가행', type: 'dakuon' },
  { id: 'go', hiragana: 'ご', katakana: 'ゴ', romaji: 'go', korean: '고', rowKey: 'ga', rowName: '가행', type: 'dakuon' },

  // 자행
  { id: 'za', hiragana: 'ざ', katakana: 'ザ', romaji: 'za', korean: '자', rowKey: 'za', rowName: '자행', type: 'dakuon' },
  { id: 'ji', hiragana: 'じ', katakana: 'ジ', romaji: 'ji', korean: '지', rowKey: 'za', rowName: '자행', type: 'dakuon' },
  { id: 'zu', hiragana: 'ず', katakana: 'ズ', romaji: 'zu', korean: '즈', rowKey: 'za', rowName: '자행', type: 'dakuon' },
  { id: 'ze', hiragana: 'ぜ', katakana: 'ゼ', romaji: 'ze', korean: '제', rowKey: 'za', rowName: '자행', type: 'dakuon' },
  { id: 'zo', hiragana: 'ぞ', katakana: 'ゾ', romaji: 'zo', korean: '조', rowKey: 'za', rowName: '자행', type: 'dakuon' },

  // 다행
  { id: 'da', hiragana: 'だ', katakana: 'ダ', romaji: 'da', korean: '다', rowKey: 'da', rowName: '다행', type: 'dakuon' },
  { id: 'di', hiragana: 'ぢ', katakana: 'ヂ', romaji: 'ji/di', korean: '지', rowKey: 'da', rowName: '다행', type: 'dakuon' },
  { id: 'du', hiragana: 'づ', katakana: 'ヅ', romaji: 'zu/du', korean: '즈', rowKey: 'da', rowName: '다행', type: 'dakuon' },
  { id: 'de', hiragana: 'で', katakana: 'デ', romaji: 'de', korean: '데', rowKey: 'da', rowName: '다행', type: 'dakuon' },
  { id: 'do', hiragana: 'ど', katakana: 'ド', romaji: 'do', korean: '도', rowKey: 'da', rowName: '다행', type: 'dakuon' },

  // 바행
  { id: 'ba', hiragana: 'ば', katakana: 'バ', romaji: 'ba', korean: '바', rowKey: 'ba', rowName: '바행', type: 'dakuon' },
  { id: 'bi', hiragana: 'び', katakana: 'ビ', romaji: 'bi', korean: '비', rowKey: 'ba', rowName: '바행', type: 'dakuon' },
  { id: 'bu', hiragana: 'ぶ', katakana: 'ブ', romaji: 'bu', korean: '부', rowKey: 'ba', rowName: '바행', type: 'dakuon' },
  { id: 'be', hiragana: 'べ', katakana: 'ベ', romaji: 'be', korean: '베', rowKey: 'ba', rowName: '바행', type: 'dakuon' },
  { id: 'bo', hiragana: 'ぼ', katakana: 'ボ', romaji: 'bo', korean: '보', rowKey: 'ba', rowName: '바행', type: 'dakuon' },

  // --- 반탁음 ---
  // 파행
  { id: 'pa', hiragana: 'ぱ', katakana: 'パ', romaji: 'pa', korean: '파', rowKey: 'pa', rowName: '파행', type: 'handakuon' },
  { id: 'pi', hiragana: 'ぴ', katakana: 'ピ', romaji: 'pi', korean: '피', rowKey: 'pa', rowName: '파행', type: 'handakuon' },
  { id: 'pu', hiragana: 'ぷ', katakana: 'プ', romaji: 'pu', korean: '푸', rowKey: 'pa', rowName: '파행', type: 'handakuon' },
  { id: 'pe', hiragana: 'ぺ', katakana: 'ペ', romaji: 'pe', korean: '페', rowKey: 'pa', rowName: '파행', type: 'handakuon' },
  { id: 'po', hiragana: 'ぽ', katakana: 'ポ', romaji: 'po', korean: '포', rowKey: 'pa', rowName: '파행', type: 'handakuon' },
];
