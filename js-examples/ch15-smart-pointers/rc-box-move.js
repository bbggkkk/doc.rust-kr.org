// Box<T>로 소유권 공유 시도 — Rust에서는 이동 발생
// Rust에서는 Box로 만든 값을 두 번째 변수에서 사용하면
// 소유권이 이동되어 첫 번째 변수를 다시 사용할 수 없습니다.
// JS에서는 이런 제약이 없습니다.

// Rust: let a = Cons(5, Box::new(Cons(10, Box::new(Nil))));
//        let b = Cons(3, Box::new(a));  // a가 이동됨
//        let c = Cons(4, Box::new(a));  // 에러! a는 이미 이동됨

// JS에서는 같은 객체를 여러 변수가 참조할 수 있습니다:
const a = { value: 5, next: { value: 10, next: null } };
const b = { value: 3, next: a }; // a를 참조
const c = { value: 4, next: a }; // a를 다시 참조 — 문제 없음!

console.log(b.next.value); // 5
console.log(c.next.value); // 5
