// JS에서는 역참조(dereference) 개념이 없습니다.
// 변수는 항상 값 자체이거나 객체에 대한 참조입니다.

const x = 5;
const y = x; // 원시 타입은 값이 복사됨 (참조가 아님)

console.assert(5 === x);
console.assert(5 === y); // Rust의 *y와 달리 역참조 불필요
