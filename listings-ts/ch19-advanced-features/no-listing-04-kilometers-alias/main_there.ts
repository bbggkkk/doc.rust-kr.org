// Rust: type Kilometers = i32; → TS: type Kilometers = number;
// 별칭이므로 원래 타입과 동일하게 취급됨 (뉴타입과 다름)

type Kilometers = number;

const x: number = 5;
const y: Kilometers = 5;

console.log(`x + y = ${x + y}`);
