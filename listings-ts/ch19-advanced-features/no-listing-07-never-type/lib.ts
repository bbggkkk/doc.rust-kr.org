// Rust의 ! (부정 타입, never type) → TS의 never
// 함수가 절대 반환하지 않음을 나타냄

function bar(): never {
  // --생략--
  throw new Error("이 함수는 절대 반환하지 않습니다");
}
