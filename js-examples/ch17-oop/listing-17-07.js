// Rust의 struct + impl Draw for Button → JS의 class

class Button {
  constructor(width, height, label) {
    this.width = width;
    this.height = height;
    this.label = label;
  }

  draw() {
    // 실제로 버튼을 그리는 코드
    console.log(`Drawing button: ${this.label}`);
  }
}
