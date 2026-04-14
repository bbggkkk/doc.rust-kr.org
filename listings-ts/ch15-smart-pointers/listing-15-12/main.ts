// Rust의 역참조 강제 변환(deref coercion)은
// JS의 자동 타입 변환과 유사합니다.
// Rust: &MyBox<String> → &String → &str 자동 변환
// JS: 객체의 toString()이 자동 호출되는 것과 비슷

class MyBox<T> {
  constructor(private inner: T) {}
  static new<T>(x: T): MyBox<T> { return new MyBox(x); }
  deref(): T { return this.inner; }
  // JS에서는 toString()으로 자동 변환
  toString(): string { return String(this.inner); }
}

function hello(name: string): void {
  console.log(`Hello, ${name}!`);
}

const m = MyBox.new("Rust");
hello(m.deref()); // JS에서는 명시적으로 꺼내야 함
// Rust에서는 hello(&m)만으로 자동 역참조 강제 변환됨
