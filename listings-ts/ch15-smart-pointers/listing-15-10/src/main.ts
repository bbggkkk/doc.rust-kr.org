// Deref 트레이트 구현 → JS의 valueOf / Symbol.toPrimitive와 유사
// Rust: impl Deref → *y로 내부 값 접근 가능
// JS: valueOf() 구현 → 암묵적 타입 변환 시 내부 값 반환
class MyBox<T> {
  constructor(private value: T) {}

  static new<T>(x: T): MyBox<T> {
    return new MyBox(x);
  }

  // Rust의 deref(&self) -> &T 에 해당
  valueOf(): T {
    return this.value;
  }

  // Symbol.toPrimitive를 사용한 더 정확한 구현
  [Symbol.toPrimitive](): T {
    return this.value;
  }
}
