// Rust: Point에 Display 트레이트 구현
// JavaScript에서는 toString() 메서드를 오버라이드합니다

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

const p = new Point(1, 3);
console.log(p.toString()); // (1, 3)
