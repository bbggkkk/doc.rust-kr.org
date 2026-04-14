// JS에서는 참조 카운트를 직접 확인할 수 없습니다.
// GC가 내부적으로 관리하며, 참조가 0이 되면 자동 수집합니다.

type List = { kind: "Cons"; value: number; next: List }
           | { kind: "Nil" };

const Nil: List = { kind: "Nil" };
const Cons = (value: number, next: List): List =>
  ({ kind: "Cons", value, next });

const a = Cons(5, Cons(10, Nil));
// JS에서는 Rc::strong_count() 같은 API가 없음
console.log("a 생성 후 - 참조 카운트 확인 불가 (GC가 관리)");

const b = Cons(3, a);
console.log("b 생성 후 - a를 참조하는 곳: a, b");

{
  const c = Cons(4, a);
  console.log("c 생성 후 - a를 참조하는 곳: a, b, c");
}
// c가 스코프를 벗어남 → GC가 나중에 수집할 수 있음
console.log("c가 스코프를 벗어난 후 - a를 참조하는 곳: a, b");
