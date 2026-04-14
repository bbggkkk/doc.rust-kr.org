// Rc<RefCell<T>>: 복수 소유자 + 내부 가변성 조합
// JS에서는 여러 참조가 같은 가변 객체를 자연스럽게 공유
type List =
  | { tag: "Cons"; value: { current: number }; next: List }
  | { tag: "Nil" };
const Nil: List = { tag: "Nil" };

// Rc<RefCell<i32>> → JS에서는 객체로 감싸서 공유 가변 값 표현
// { current: number }로 감싸면 여러 곳에서 같은 값을 변경 가능
const value = { current: 5 }; // Rc::new(RefCell::new(5))에 해당

const a: List = { tag: "Cons", value, next: Nil };
const b: List = { tag: "Cons", value: { current: 3 }, next: a };
const c: List = { tag: "Cons", value: { current: 4 }, next: a };

// *value.borrow_mut() += 10 → JS에서는 직접 변경
value.current += 10;

console.log("a after =", JSON.stringify(a)); // value: 15
console.log("b after =", JSON.stringify(b)); // a의 value도 15
console.log("c after =", JSON.stringify(c)); // a의 value도 15
