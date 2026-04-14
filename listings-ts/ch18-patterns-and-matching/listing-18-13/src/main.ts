interface Point {
  x: number;
  y: number;
}

const p: Point = { x: 0, y: 7 };

// 구조체 필드 축약 → 객체 구조 분해 (같은 이름)
const { x, y } = p;
console.assert(x === 0);
console.assert(y === 7);
