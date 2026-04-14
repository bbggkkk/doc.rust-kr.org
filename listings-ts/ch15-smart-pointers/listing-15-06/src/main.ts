// Rust의 참조자(&)와 역참조(*) - JS에는 직접적인 대응이 없음
// JS에서는 모든 객체가 이미 참조이며, 역참조 연산자가 불필요
const x = 5;
const y = x; // JS에서는 원시값이 복사됨 (참조가 아님)

console.assert(5 === x);
console.assert(5 === y); // JS에서는 *y 없이 바로 비교 가능
