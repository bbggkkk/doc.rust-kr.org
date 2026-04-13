// 콘스 리스트 — Rust에서는 Box<T>가 필요하지만 JS에서는 불필요
// Rust는 재귀적 타입의 크기를 컴파일 타임에 알아야 하므로
// Box로 간접 참조해야 합니다. JS는 이런 제약이 없습니다.

class Cons {
  constructor(value, next) {
    this.value = value;
    this.next = next; // 다른 Cons 또는 null
  }
}

// 리스트 1, 2, 3 생성
const list = new Cons(1, new Cons(2, new Cons(3, null)));

// 순회
let current = list;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
// 1, 2, 3
