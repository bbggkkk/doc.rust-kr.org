// JS에서는 Deref 트레이트가 없지만,
// valueOf()나 Symbol.toPrimitive로 유사한 자동 변환을 구현할 수 있습니다.

class MyBox<T> {
  constructor(private inner: T) {}
  static new<T>(x: T): MyBox<T> { return new MyBox(x); }

  // Rust의 Deref 트레이트 구현에 해당
  deref(): T { return this.inner; }

  // JS의 자동 변환 메커니즘 (Deref와 유사한 역할)
  valueOf(): T { return this.inner; }
}

const x = 5;
const y = MyBox.new(x);

console.assert(5 === x);
console.assert(5 == y.deref());  // 명시적 deref
console.assert(5 == (y as any)); // valueOf()를 통한 암묵적 변환
