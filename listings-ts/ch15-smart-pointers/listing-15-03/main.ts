// JS에서는 모든 객체가 힙에 할당되므로,
// 재귀적 타입의 크기 문제가 발생하지 않습니다.

type List = { kind: "Cons"; value: number; next: List }
           | { kind: "Nil" };

const Nil: List = { kind: "Nil" };
const Cons = (value: number, next: List): List =>
  ({ kind: "Cons", value, next });

const list = Cons(1, Cons(2, Cons(3, Nil)));
