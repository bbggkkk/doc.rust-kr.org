// unsafe 블록: Rust 컴파일러의 안전성 검사를 우회 (JS/TS에는 해당 개념 없음)
// Rust에서는 원시 포인터와 unsafe를 사용해야 하지만,
// TS에서는 배열 분할이 간단함

function splitAtMut(values: number[], mid: number): [number[], number[]] {
  const len = values.length;

  if (mid > len) throw new Error("mid > len");

  // Rust: slice::from_raw_parts_mut(ptr, mid) — 원시 포인터로 슬라이스 생성
  // TS: 그냥 slice 사용
  return [values.slice(0, mid), values.slice(mid)];
}
