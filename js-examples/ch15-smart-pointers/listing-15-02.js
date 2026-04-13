// 재귀적 타입 정의 — JS에서는 크기 제한이 없음
// Rust에서는 재귀적 열거형의 크기를 알 수 없어 컴파일 에러가 발생합니다.
// JS에서는 이런 제약이 없습니다.

// Rust: enum List { Cons(i32, List), Nil } — 컴파일 에러!
// JS에서는 자유롭게 재귀적 구조를 만들 수 있습니다:

class Cons {
  constructor(value, next) {
    this.value = value;
    this.next = next; // 다른 Cons 또는 null (Nil)
  }
}

// Rust에서는 Box<List>로 감싸야 하지만 JS에서는 바로 사용 가능
const list = new Cons(1, new Cons(2, new Cons(3, null)));
