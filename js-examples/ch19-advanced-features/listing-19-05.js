// JavaScript로 보기 — unsafe는 JS에 없는 개념입니다
// Rust: 안전한 러스트로 split_at_mut 구현 시도 (컴파일 실패)
// JavaScript에서는 대여 검사가 없으므로 자유롭게 슬라이스할 수 있습니다.

function splitAtMut(values, mid) {
  if (mid > values.length) {
    throw new Error("index out of bounds");
  }
  return [values.slice(0, mid), values.slice(mid)];
}

const vector = [1, 2, 3, 4, 5, 6];
const [left, right] = splitAtMut(vector, 3);
console.log("left:", left);   // [1, 2, 3]
console.log("right:", right); // [4, 5, 6]
