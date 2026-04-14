// move 클로저: 소유권을 스레드로 이동
// JS에서는 Web Worker 사용 시 structuredClone으로 데이터 복사 전달
// 또는 클로저가 자연스럽게 캡처 (싱글스레드)
const v = [1, 2, 3];

// Rust: move || { ... } → 소유권 이동, 원본 사용 불가
// JS: 클로저 캡처 (참조 공유, 소유권 개념 없음)
const handle = (async () => {
  console.log(`Here's a vector: ${JSON.stringify(v)}`);
})();

// Rust에서는 move 후 v 사용 불가
// JS에서는 v가 여전히 사용 가능 (소유권 이동이 없음)

await handle;
