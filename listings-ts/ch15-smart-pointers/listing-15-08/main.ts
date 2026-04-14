// JS에서는 Deref 트레이트 같은 개념이 없습니다.
// 단순히 클래스로 감싸는 것만으로 충분합니다.

class MyBox<T> {
  constructor(private inner: T) {}

  static new<T>(x: T): MyBox<T> {
    return new MyBox(x);
  }

  // Rust의 deref()에 해당 - 내부 값을 꺼냄
  deref(): T {
    return this.inner;
  }
}
