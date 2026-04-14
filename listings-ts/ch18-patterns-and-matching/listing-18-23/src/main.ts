interface Point {
  x: number;
  y: number;
  z: number;
}

const origin: Point = { x: 0, y: 0, z: 0 };

// .. 로 나머지 무시 → 필요한 필드만 구조 분해
const { x } = origin; // y, z는 무시
console.log(`x is ${x}`);
