// JS에서는 참조를 여러 곳에서 공유하는 것이 기본입니다.
// Rust의 소유권 이동(move) 문제가 발생하지 않습니다.

type List = { kind: "Cons"; value: number; next: List }
           | { kind: "Nil" };

const Nil: List = { kind: "Nil" };
const Cons = (value: number, next: List): List =>
  ({ kind: "Cons", value, next });

const a = Cons(5, Cons(10, Nil));
const b = Cons(3, a); // JS에서는 a를 자유롭게 공유 가능
const c = Cons(4, a); // Rust에서는 a가 이미 이동되어 에러!
// JS: 참조로 공유되므로 문제 없음
