interface Point {
  x: number;
  y: number;
}

const p: Point = { x: 0, y: 7 };

// 구조체 해체 → 객체 구조 분해 (다른 이름으로)
const { x: a, y: b } = p;
console.assert(a === 0);
console.assert(b === 7);
