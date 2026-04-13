// Rust의 제네릭 + 트레이트 바운드 → JS에서는 타입 제약이 없어
// 하나의 배열에 다양한 타입을 넣을 수 있습니다.
// 하지만 이 방식은 모든 요소가 동일 타입이어야 하는 Rust의 제네릭과 다릅니다.

class Screen {
  components = [];

  run() {
    for (const component of this.components) {
      component.draw(); // JS는 덕 타이핑 — draw()가 있으면 호출 가능
    }
  }
}
