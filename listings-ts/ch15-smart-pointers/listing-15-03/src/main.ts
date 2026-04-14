// JS/TS에서는 재귀적 타입이 자연스럽게 동작함 (참조 기반)
type List = { tag: "Cons"; value: number; next: List } | { tag: "Nil" };

const Nil: List = { tag: "Nil" };
const Cons = (value: number, next: List): List => ({ tag: "Cons", value, next });

const list = Cons(1, Cons(2, Cons(3, Nil)));
