// Rust: fn generic<T: ?Sized>(t: &T) {} — T가 Sized가 아닐 수도 있음
// JavaScript에서는 모든 값이 참조로 전달되므로 이 구분이 불필요합니다

function generic(t) {
  console.log(t);
}

generic(42);
generic("hello");
generic([1, 2, 3]);
