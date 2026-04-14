// Rc<T>: 참조 카운팅 스마트 포인터 (JS는 GC로 자동 관리)
// Rust에서 여러 소유자가 필요할 때 Rc를 사용하지만,
// JS에서는 모든 객체가 이미 참조 기반이므로 자연스럽게 공유됨
type List = { tag: "Cons"; value: number; next: List } | { tag: "Nil" };
const Nil: List = { tag: "Nil" };
const Cons = (value: number, next: List): List => ({ tag: "Cons", value, next });

// Rc::new → JS에서는 그냥 객체 생성
const a = Cons(5, Cons(10, Nil));
// Rc::clone(&a) → JS에서는 같은 참조를 공유 (GC가 참조 추적)
const b = Cons(3, a); // a의 참조를 공유
const c = Cons(4, a); // a의 참조를 공유 - JS에서는 자연스럽게 동작
