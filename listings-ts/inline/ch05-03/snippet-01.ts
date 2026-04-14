class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distance(other: Point): number {
    const x_squared = (other.x - this.x) ** 2;
    const y_squared = (other.y - this.y) ** 2;
    return Math.sqrt(x_squared + y_squared);
  }
}

const p1 = new Point(0.0, 0.0);
const p2 = new Point(5.0, 6.5);
p1.distance(p2);
// 자동 참조 불필요 — TS에서는 항상 . 으로 호출
