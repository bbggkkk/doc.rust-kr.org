// Rust의 Vec<Box<dyn Draw>> → JS의 배열 (덕 타이핑)

class Screen {
  constructor(components = []) {
    this.components = components; // draw()를 가진 객체의 배열
  }

  run() {
    for (const component of this.components) {
      component.draw(); // 덕 타이핑: draw() 메서드만 있으면 호출 가능
    }
  }
}
