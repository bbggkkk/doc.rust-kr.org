// Rc::strong_count: 참조 카운트 추적
// JS에서는 GC가 내부적으로 참조를 추적하지만, 개발자가 직접 확인할 수 없음
type List = { tag: "Cons"; value: number; next: List } | { tag: "Nil" };
const Nil: List = { tag: "Nil" };
const Cons = (value: number, next: List): List => ({ tag: "Cons", value, next });

const a = Cons(5, Cons(10, Nil));
// JS에서는 참조 카운트를 직접 확인할 방법이 없음
// Rust: Rc::strong_count(&a) == 1
const b = Cons(3, a);
// Rust: Rc::strong_count(&a) == 2
{
  const c = Cons(4, a);
  // Rust: Rc::strong_count(&a) == 3
}
// c가 스코프를 벗어남 → Rust: Rc::strong_count(&a) == 2
// JS: GC가 자동으로 처리 (시점 미보장)
