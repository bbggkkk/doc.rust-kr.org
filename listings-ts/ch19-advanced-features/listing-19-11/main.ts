// unsafe 블록: Rust 컴파일러의 안전성 검사를 우회 (JS/TS에는 해당 개념 없음)
// Rust의 unsafe trait는 구현자가 특정 불변성을 지키겠다고 약속하는 것
// TS에는 "안전하지 않은 인터페이스" 개념이 없음

interface Foo {
  // 여기에 메서드가 정의됩니다
}

// Rust: unsafe impl Foo for i32 { ... }
// TS에서는 그냥 일반 구현
class NumberFoo implements Foo {
  // 여기에 메서드 구현이 작성됩니다
}
