// 재귀적 타입 사용 시도 — JS에서는 문제 없음
// Rust: Cons(1, Cons(2, Cons(3, Nil))) — Box 없이는 컴파일 에러
// JS에서는 객체가 참조로 저장되므로 크기 제약이 없습니다.

class Cons {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Rust에서는 이 코드가 "infinite size" 에러를 발생시키지만
// JS에서는 정상 동작합니다.
const list = new Cons(1, new Cons(2, new Cons(3, null)));
console.log(list.value); // 1
console.log(list.next.value); // 2
