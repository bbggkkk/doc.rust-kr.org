// 역참조 강제 변환 없이 수동으로 변환하는 경우
// Rust: hello(&(*m)[..]) - 역참조 후 슬라이스
// JS에서도 명시적 변환이 필요한 상황
class MyBox<T> {
  constructor(private value: T) {}
  static new<T>(x: T): MyBox<T> { return new MyBox(x); }
  valueOf(): T { return this.value; }
}

function hello(name: string): void {
  console.log(`Hello, ${name}!`);
}

const m = MyBox.new("Rust");
// Rust의 &(*m)[..]에 해당 - 명시적으로 내부 값을 꺼내서 전달
hello(String(m.valueOf()));
