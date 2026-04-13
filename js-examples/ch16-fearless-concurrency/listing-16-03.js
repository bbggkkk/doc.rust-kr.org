// Rust에서는 클로저가 외부 변수를 빌려올 때 스레드 안전성을 보장할 수 없어 컴파일 에러가 납니다.
// JS에서는 클로저가 자유롭게 외부 변수를 참조할 수 있습니다 — 소유권 개념이 없기 때문입니다.

const v = [1, 2, 3];

setTimeout(() => {
  // JS에서는 문제없이 동작합니다
  console.log(`Here's an array: ${JSON.stringify(v)}`);
}, 0);
