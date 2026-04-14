// Rc<RefCell<T>> 조합은 JS에서 기본 동작입니다.
// JS에서는 공유된 객체의 값을 언제든 변경할 수 있습니다.

type List = { kind: "Cons"; value: { current: number }; next: List }
           | { kind: "Nil" };

const Nil: List = { kind: "Nil" };
const Cons = (value: { current: number }, next: List): List =>
  ({ kind: "Cons", value, next });

// Rc::new(RefCell::new(5)) → JS에서는 그냥 객체
const value = { current: 5 }; // 참조로 공유 + 변경 가능

const a = Cons(value, Nil);
const b = Cons({ current: 3 }, a); // a를 참조로 공유
const c = Cons({ current: 4 }, a); // a를 참조로 공유

// *value.borrow_mut() += 10 → JS에서는 직접 변경
value.current += 10;

console.log("a after =", JSON.stringify(a)); // value: 15
console.log("b after =", JSON.stringify(b)); // a의 value: 15
console.log("c after =", JSON.stringify(c)); // a의 value: 15
