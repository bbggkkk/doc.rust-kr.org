// 예제 19-14: 연산자 오버로딩 (Add 트레이트)
// JS에서는 연산자 오버로딩을 직접 지원하지 않습니다.
// 대신 메서드를 정의하여 유사한 기능을 구현합니다.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // + 연산자 대신 add 메서드 사용
  add(other) {
    return new Point(this.x + other.x, this.y + other.y);
  }

  toString() {
    return `Point { x: ${this.x}, y: ${this.y} }`;
  }
}

const p1 = new Point(1, 0);
const p2 = new Point(2, 3);
const result = p1.add(p2);

console.log(`${result}`); // Point { x: 3, y: 3 }
