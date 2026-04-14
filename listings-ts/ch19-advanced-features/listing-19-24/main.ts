// 긴 타입을 반복 사용하는 예 — TS에서도 타입 별칭으로 해결 가능

// Rust: Box<dyn Fn() + Send + 'static> → TS: () => void
const f: () => void = () => console.log("hi");

function takesLongType(f: () => void): void {
  // --생략--
}

function returnsLongType(): () => void {
  // --생략--
  return () => {};
}
