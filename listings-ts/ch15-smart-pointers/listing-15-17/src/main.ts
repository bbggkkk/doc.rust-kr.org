// Rust: Box로 소유권 이동 - 한 값을 두 곳에서 사용 불가
// JS: 참조 기반이므로 여러 변수가 같은 객체를 가리킬 수 있음
type List = { tag: "Cons"; value: number; next: List } | { tag: "Nil" };
const Nil: List = { tag: "Nil" };
const Cons = (value: number, next: List): List => ({ tag: "Cons", value, next });

const a = Cons(5, Cons(10, Nil));
const b = Cons(3, a); // JS에서는 a를 여전히 사용 가능
const c = Cons(4, a); // Rust에서는 a가 이미 b로 이동되어 에러!
// JS는 참조 복사이므로 b와 c 모두 a를 공유할 수 있음
