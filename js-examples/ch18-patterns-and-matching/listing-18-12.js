// Rust의 구조체 해체 → JS의 객체 구조 분해

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const p = new Point(0, 7);
const { x: a, y: b } = p; // 다른 이름으로 분해
console.log(a, b); // 0 7
