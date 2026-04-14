// JS에서는 모든 객체가 참조로 공유되므로 Rc<T>가 필요 없습니다.
// Rc<T>의 참조 카운팅은 JS의 GC가 자동으로 처리합니다.

type List = { kind: "Cons"; value: number; next: List }
           | { kind: "Nil" };

const Nil: List = { kind: "Nil" };
const Cons = (value: number, next: List): List =>
  ({ kind: "Cons", value, next });

// Rc::new() 없이 그냥 참조 공유
const a = Cons(5, Cons(10, Nil));
const b = Cons(3, a); // a를 참조로 공유 (Rc::clone 불필요)
const c = Cons(4, a); // 여러 곳에서 자유롭게 참조 가능
// JS의 GC가 참조 카운팅과 유사한 역할을 수행
