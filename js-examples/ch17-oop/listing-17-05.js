// Rust의 트레이트 객체 벡터 + run 메서드 → JS의 다형성 배열

class Screen {
  components = [];

  run() {
    for (const component of this.components) {
      component.draw();
    }
  }
}
