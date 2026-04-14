// JS에서는 모든 객체가 힙에 할당되므로 Box가 필요 없습니다.
// Rust에서 Box<List>를 쓰는 이유는 재귀 타입의 크기를 알기 위함이지만,
// JS에서는 참조(포인터)가 기본이라 자연스럽게 동작합니다.

type List = { kind: "Cons"; value: number; next: List }
           | { kind: "Nil" };

const Nil: List = { kind: "Nil" };
const Cons = (value: number, next: List): List =>
  ({ kind: "Cons", value, next });

// Box::new() 없이도 동작 - JS는 이미 힙 할당
const list = Cons(1, Cons(2, Cons(3, Nil)));
