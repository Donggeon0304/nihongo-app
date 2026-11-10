/**
 * Web Speech API 기반 일본어 원어민 발음 재생 유틸리티
 */

let cachedVoices: SpeechSynthesisVoice[] = [];

// 음성 목록 초기화
export const initVoices = (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      cachedVoices = voices;
      resolve(voices);
      return;
    }

    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
      resolve(cachedVoices);
    };
  });
};

/**
 * 일본어 텍스트를 원어민 발음으로 읽어주는 함수
 * @param text 일본어 텍스트 (단어, 문장, 카나 등)
 * @param rate 재생 속도 (기본 0.9 - 학습용으로 조금 또박또박)
 */
export const playJapaneseSpeech = (text: string, rate: number = 0.9): void => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  // 기존 음성 취소 (중복 재생 방지)
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  utterance.rate = rate;
  utterance.pitch = 1.0;

  // 일본어 지원 보이스 찾기
  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  const jaVoice = voices.find(
    (v) =>
      v.lang.startsWith('ja') ||
      v.name.includes('Japanese') ||
      v.name.includes('日本語') ||
      v.name.includes('Kyoko') ||
      v.name.includes('Nanami')
  );

  if (jaVoice) {
    utterance.voice = jaVoice;
  }

  window.speechSynthesis.speak(utterance);
};
