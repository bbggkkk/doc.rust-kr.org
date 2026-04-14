// Rust의 continue는 ! 타입 (never) → 다른 모든 타입으로 강제 변환 가능
// TS에서는 continue가 타입 시스템에 영향을 주지 않음

const guessStr = "42";
const guess: number = (() => {
  const parsed = parseInt(guessStr);
  if (isNaN(parsed)) {
    // Rust: Err(_) => continue — continue는 ! 타입
    // TS: continue는 반복문 내에서만 사용 가능
    throw new Error("파싱 실패"); // never를 반환
  }
  return parsed;
})();
