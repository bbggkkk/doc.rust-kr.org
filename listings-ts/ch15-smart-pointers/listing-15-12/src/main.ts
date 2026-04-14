// 역참조 강제 변환: MyBox<String> → &String → &str 자동 변환
// JS에서는 toString() 메서드가 자동 호출되어 유사한 효과
class MyBox<T> {
  constructor(private value: T) {}
  static new<T>(x: T): MyBox<T> { return new MyBox(x); }
  toString(): string { return String(this.value); }
  valueOf(): T { return this.value; }
}

function hello(name: string): void {
  console.log(`Hello, ${name}!`);
}

const m = MyBox.new("Rust");
hello(m.valueOf() as string); // JS에서는 명시적 변환 필요 (자동 변환 안 됨)
// Rust는 Deref 체인으로 &MyBox<String> → &String → &str 자동 변환
