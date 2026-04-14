// Rust: fn returns_closure() -> Box<dyn Fn(i32) -> i32>
// Box로 감싸면 크기가 고정되어 반환 가능
// TS: 함수는 항상 힙에 할당되므로 Box 없이도 반환 가능

function returnsClosure(): (x: number) => number {
  return (x) => x + 1;
}
