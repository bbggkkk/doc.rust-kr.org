// Rust: type Thunk = Box<dyn Fn() + Send + 'static>;
// TS: 타입 별칭으로 반복을 줄임
type Thunk = () => void;

const f: Thunk = () => console.log("hi");

function takesLongType(f: Thunk): void {
  // --생략--
}

function returnsLongType(): Thunk {
  // --생략--
  return () => {};
}
