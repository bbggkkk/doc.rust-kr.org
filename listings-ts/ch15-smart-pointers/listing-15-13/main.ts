// 역참조 강제 변환이 없다면 이렇게 복잡해집니다.
// JS에서는 Rust만큼 복잡하지 않지만,
// 래퍼에서 값을 꺼내는 과정은 여전히 필요합니다.

class MyBox<T> {
  constructor(private inner: T) {}
  static new<T>(x: T): MyBox<T> { return new MyBox(x); }
  deref(): T { return this.inner; }
}

function hello(name: string): void {
  console.log(`Hello, ${name}!`);
}

const m = MyBox.new("Rust");
// Rust에서 역참조 강제 변환 없이: hello(&(*m)[..]);
// JS에서 명시적으로:
hello(m.deref()); // MyBox에서 값을 꺼냄
