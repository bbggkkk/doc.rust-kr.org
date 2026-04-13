// JavaScript로 보기 — unsafe는 JS에 없는 개념입니다
// Rust: unsafe 코드를 사용한 split_at_mut 구현
// JavaScript에서는 포인터 연산 없이 slice()로 구현합니다.

function splitAtMut(values, mid) {
  const len = values.length;
  console.assert(mid <= len);
  return [values.slice(0, mid), values.slice(mid)];
}

const vector = [1, 2, 3, 4, 5, 6];
const [left, right] = splitAtMut(vector, 3);
console.log("left:", left);   // [1, 2, 3]
console.log("right:", right); // [4, 5, 6]
