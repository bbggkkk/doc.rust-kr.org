// Rust의 .. (나머지 무시) → JS의 구조 분해에서 나머지 무시

const point = { x: 0, y: 0, z: 0 };
const { x, ...rest } = point; // y, z는 rest에 모임
console.log(`x is ${x}`);
// rest = { y: 0, z: 0 } — 필요 없으면 무시
