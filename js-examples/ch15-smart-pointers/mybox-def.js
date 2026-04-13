// MyBox<T> 타입 정의하기 — 커스텀 스마트 포인터
// JS에는 스마트 포인터 개념이 없습니다.
// 하지만 유사한 래퍼 클래스를 만들 수 있습니다.

class MyBox {
  #value;
  constructor(value) {
    this.#value = value;
  }

  // Rust의 Deref 트레이트에 해당하는 것은 JS에 없지만,
  // valueOf()로 암묵적 변환을 구현할 수 있습니다.
  valueOf() {
    return this.#value;
  }
}

const y = new MyBox(5);
console.log(y + 0); // 5 — valueOf()로 자동 변환
