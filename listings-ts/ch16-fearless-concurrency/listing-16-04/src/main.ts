// Rust: 참조가 유효하지 않을 수 있는 위험한 상황
// JS: 싱글스레드 + GC이므로 이런 문제가 발생하지 않음
let v: number[] | null = [1, 2, 3];

const handle = (async () => {
  // JS에서는 v가 null이 되었을 수 있지만, 원본 배열은 GC 전까지 유효
  console.log(`Here's a vector: ${JSON.stringify(v)}`);
})();

v = null; // Rust: drop(v) - JS에서는 참조만 제거, 배열 자체는 GC 대상

await handle;
// Rust에서는 컴파일 에러로 이런 상황 자체를 방지
