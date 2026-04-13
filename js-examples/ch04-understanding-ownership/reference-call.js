// Rust: let len = calculate_length(&s1);
// JS에서는 객체와 배열은 항상 참조로 전달됩니다.
// 문자열은 원시 타입이므로 값으로 전달됩니다.
function calculateLength(s) {
  return s.length;
}

const s1 = "hello";
const len = calculateLength(s1);
console.log(`The length of '${s1}' is ${len}.`);
