// Rust의 기본 타입 매개변수 Rhs=Self → TS의 기본 제네릭 타입 매개변수
// 연산자 오버로딩: TS는 연산자 오버로딩을 지원하지 않으므로 인터페이스로만 표현

interface Add<Rhs = Self, Output = Self> {
  // TS에서 Self는 키워드가 아니므로 개념적 표현
  add(rhs: Rhs): Output;
}

// 실제 TS에서는 이렇게 사용:
// interface Add<Rhs = Point> {
//   add(rhs: Rhs): Point;
// }
