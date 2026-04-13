// Rust: 튜플로 소유권을 돌려받는 패턴
// JS에서는 소유권이 없으므로 이런 패턴이 필요 없습니다.
function calculateLength(s) {
  const length = s.length;
  return [s, length]; // 배열로 여러 값 반환
}

const s1 = "hello";
const [s2, len] = calculateLength(s1);
console.log(`The length of '${s2}' is ${len}.`);
