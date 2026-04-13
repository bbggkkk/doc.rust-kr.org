// 예제 5-16: 여러 impl 블록 — JavaScript에서는 하나의 class에 정의합니다

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // JavaScript에서는 모든 메서드가 하나의 class 블록 안에 있어야 합니다
  // Rust처럼 여러 impl 블록으로 나눌 수 없습니다
  area() {
    return this.width * this.height;
  }

  canHold(other) {
    return this.width > other.width && this.height > other.height;
  }
}
