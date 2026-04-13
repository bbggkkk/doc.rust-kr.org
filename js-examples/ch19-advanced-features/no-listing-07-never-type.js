// Rust: fn bar() -> ! (부정 타입, 절대 반환하지 않는 함수)
// JavaScript에서는 never 반환 타입 개념이 없지만,
// throw나 무한 루프로 비슷한 동작을 표현합니다

/** @returns {never} */
function bar() {
  throw new Error("이 함수는 절대 반환하지 않습니다");
}
