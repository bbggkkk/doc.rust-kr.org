// 순환 참조 생성 - JS에서도 동일한 문제 발생 가능
// Rust: Rc + RefCell로 순환 참조 → 메모리 누수
// JS: 객체 간 상호 참조 → GC가 Mark-and-Sweep으로 대부분 처리
type List =
  | { tag: "Cons"; value: number; next: List }
  | { tag: "Nil" };

const a: List = { tag: "Cons", value: 5, next: { tag: "Nil" } };
const b: List = { tag: "Cons", value: 10, next: a };

// 순환 참조 생성: a가 b를 가리키도록 변경
// Rust: *link.borrow_mut() = Rc::clone(&b)
(a as any).next = b; // JS에서도 순환 참조 생성 가능

// JS의 GC (Mark-and-Sweep)는 순환 참조를 처리할 수 있지만,
// 외부에서 a, b에 접근 가능한 한 메모리는 해제되지 않음
// console.log(a) → 스택 오버플로우! (Rust와 동일)
