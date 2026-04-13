// Box<T>를 참조자처럼 사용하기 — 역참조 연산자
// JS에는 역참조 연산자(*)가 없습니다.
// Box는 Rust에서 스택/힙 구분을 위한 것이고, JS에는 불필요합니다.

const x = 5;
const y = x; // JS에서는 값이 자동 복사됨 (원시 타입)

console.assert(x === 5);
console.assert(y === 5); // Rust: assert_eq!(5, *y);

// Rust에서 Box::new(x)는 x를 힙에 저장하고 *y로 역참조하지만,
// JS에서는 이런 구분이 없습니다.
