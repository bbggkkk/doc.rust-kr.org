// Rust: 클로저가 외부 변수를 빌려옴 → 스레드 안전성 문제
// JS: 클로저가 외부 변수를 자유롭게 캡처 (싱글스레드라 안전)
const v = [1, 2, 3];

// Rust에서는 move 없이 스레드에서 외부 변수 사용 시 에러
// JS에서는 클로저 캡처가 자연스럽게 동작
const handle = (async () => {
  console.log(`Here's a vector: ${JSON.stringify(v)}`);
})();

await handle;
