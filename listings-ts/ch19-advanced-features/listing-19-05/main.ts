// Rust에서 안전한 코드만으로는 하나의 배열에서 두 개의 가변 슬라이스를
// 동시에 빌릴 수 없음 (대여 검사기가 거부)
// TS에서는 이런 제한이 없음 — 배열을 자유롭게 분할 가능

function splitAtMut(values: number[], mid: number): [number[], number[]] {
  const len = values.length;

  if (mid > len) throw new Error("mid > len");

  return [values.slice(0, mid), values.slice(mid)];
}
