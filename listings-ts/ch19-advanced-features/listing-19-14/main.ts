// 연산자 오버로딩: Rust의 impl Add → TS는 연산자 오버로딩을 지원하지 않음
// TS에서는 메서드로 대체해야 함

class Point {
  constructor(public x: number, public y: number) {}

  // Rust: impl Add for Point { fn add(self, other: Point) -> Point }
  // TS에서는 + 연산자를 오버로딩할 수 없으므로 메서드로 구현
  add(other: Point): Point {
    return new Point(this.x + other.x, this.y + other.y);
  }
}

const result = new Point(1, 0).add(new Point(2, 3));
console.assert(result.x === 3 && result.y === 3);
