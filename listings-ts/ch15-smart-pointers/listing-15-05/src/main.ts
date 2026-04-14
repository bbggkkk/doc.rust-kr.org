// Box<List>: 힙에 할당하여 재귀적 타입의 크기를 고정
// JS/TS에서는 객체가 이미 참조(포인터)이므로 Box 없이도 재귀 가능
type List = { tag: "Cons"; value: number; next: List } | { tag: "Nil" };

const Nil: List = { tag: "Nil" };
const Cons = (value: number, next: List): List => ({ tag: "Cons", value, next });

const list = Cons(1, Cons(2, Cons(3, Nil)));
