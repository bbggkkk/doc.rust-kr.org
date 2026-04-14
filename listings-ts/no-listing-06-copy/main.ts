const x = 5;
const y = x;
// 원시 타입(숫자)은 JS와 동일하게 값이 복사됩니다
// Rust에서 Copy 트레이트가 구현된 타입(정수, 부동소수점, bool, char)은
// 대입 시 이동(move)이 아닌 복사(copy)가 일어납니다
// 따라서 x는 여전히 유효합니다

console.log(`x = ${x}, y = ${y}`);
