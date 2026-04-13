// JavaScript로 보기 — unsafe는 JS에 없는 개념입니다
// Rust: unsafe 트레이트 정의 및 구현
// JavaScript에는 unsafe 트레이트 개념이 없습니다.

const FooSymbol = Symbol("Foo");

class MyType {
  [FooSymbol]() {
    // Foo 인터페이스 구현
  }
}

const instance = new MyType();
