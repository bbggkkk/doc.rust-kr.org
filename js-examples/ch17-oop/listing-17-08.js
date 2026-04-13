// Rust의 외부 크레이트에서 trait 구현 → JS의 클래스 정의

class SelectBox {
  constructor(width, height, options) {
    this.width = width;
    this.height = height;
    this.options = options;
  }

  draw() {
    // 실제로 선택 상자를 그리는 코드
    console.log(`Drawing select box with options: ${this.options}`);
  }
}
