// Rust: fn generic<T: Sized>(t: T) {} — 명시적 Sized 바운드
// JavaScript에는 타입 크기 제약이 없습니다

function generic(t) {
  console.log(typeof t, t);
}

generic(42);
generic("hello");
