// Rust: let x = 5; let y = x;
// 정수형은 Copy 트레이트가 구현되어 있어 이동 대신 복사됩니다.
const x = 5;
const y = x;
console.log(x); // 5 - JS에서도 원시 타입은 항상 복사됩니다
console.log(y); // 5
