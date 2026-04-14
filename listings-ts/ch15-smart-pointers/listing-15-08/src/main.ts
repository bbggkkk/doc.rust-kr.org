// MyBox: 커스텀 스마트 포인터 정의
// JS에서는 valueOf / Symbol.toPrimitive로 유사한 자동 변환 구현 가능
class MyBox<T> {
  constructor(private value: T) {}

  static new<T>(x: T): MyBox<T> {
    return new MyBox(x);
  }

  // JS의 valueOf는 Rust의 Deref와 유사한 역할
  valueOf(): T {
    return this.value;
  }
}
