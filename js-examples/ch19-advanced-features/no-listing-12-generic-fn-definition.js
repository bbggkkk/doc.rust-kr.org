// Rust: fn generic<T>(t: T) {} — 암묵적 Sized 바운드
// JavaScript에는 제네릭이나 Sized 바운드가 없습니다

function generic(t) {
  console.log(t);
}

generic(42);
generic("hello");
generic([1, 2, 3]);
