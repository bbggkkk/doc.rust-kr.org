// Display를 구현하면 OutlinePrint 사용 가능
// Rust: impl fmt::Display for Point { ... }

class Point {
  constructor(public x: number, public y: number) {}

  // Rust의 fmt::Display 구현 → TS의 toString() 오버라이드
  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}
