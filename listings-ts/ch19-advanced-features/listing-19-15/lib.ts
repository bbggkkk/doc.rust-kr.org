// 연산자 오버로딩: Rust의 impl Add<Meters> for Millimeters
// TS는 연산자 오버로딩을 지원하지 않으므로 메서드로 구현
// 뉴타입 패턴 → branded type 또는 래퍼 클래스로 표현

class Millimeters {
  constructor(public value: number) {}

  // Rust: impl Add<Meters> for Millimeters — 기본 타입 매개변수 Rhs를 Meters로 지정
  add(other: Meters): Millimeters {
    return new Millimeters(this.value + other.value * 1000);
  }
}

class Meters {
  constructor(public value: number) {}
}
