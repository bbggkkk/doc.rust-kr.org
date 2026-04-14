// Rust: fn returns_closure() -> dyn Fn(i32) -> i32 — 컴파일 에러!
// dyn Trait은 크기를 알 수 없으므로 직접 반환 불가
// TS: 함수 타입 반환은 아무 문제 없음

function returnsClosure(): (x: number) => number {
  return (x) => x + 1;
}
