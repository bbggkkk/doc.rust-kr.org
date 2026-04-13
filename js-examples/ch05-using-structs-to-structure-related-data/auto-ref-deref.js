// Rust의 자동 참조 및 역참조 — JavaScript에는 이 개념이 없습니다

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance(other) {
    const xSquared = (other.x - this.x) ** 2;
    const ySquared = (other.y - this.y) ** 2;
    return Math.sqrt(xSquared + ySquared);
  }
}

const p1 = new Point(0.0, 0.0);
const p2 = new Point(5.0, 6.5);

// JavaScript에서는 항상 동일한 문법으로 메서드를 호출합니다
// Rust처럼 &, &mut, * 를 자동으로 추가하는 기능은 없습니다
p1.distance(p2);
