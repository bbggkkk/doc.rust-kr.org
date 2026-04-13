// JS에서는 객체를 함수에 전달하면 항상 참조로 전달됩니다.
// Rust의 소유권/빌림 개념은 JS에 존재하지 않습니다.

function calculateLength(s) {
  return s.length;
}

const s1 = "hello";
const len = calculateLength(s1);

console.log(`The length of '${s1}' is ${len}.`);
