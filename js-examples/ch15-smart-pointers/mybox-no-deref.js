// Deref 없이 MyBox 역참조 시도 — 컴파일 에러
// Rust에서는 Deref 트레이트를 구현하지 않으면 *y로 역참조할 수 없습니다.
// JS에서는 이런 제약이 없지만, 래퍼 객체는 자동으로 언래핑되지 않습니다.

class MyBox {
  constructor(value) {
    this.value = value;
  }
  // Deref 미구현 — Rust에서는 *y 사용 시 컴파일 에러
}

const y = new MyBox(5);
// console.assert(5 === y); // false — y는 MyBox 객체
console.assert(5 === y.value); // 명시적으로 .value 접근 필요
