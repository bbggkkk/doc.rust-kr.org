// Rust: 반환 값으로 소유권 이동
// JS에서는 소유권 개념이 없으므로 값을 자유롭게 반환하고 사용할 수 있습니다.
function givesOwnership() {
  const s = "yours"; // String::from("yours")
  return s;
}

function takesAndGivesBack(s) {
  return s;
}

const s1 = givesOwnership();
const s2 = "hello";
const s3 = takesAndGivesBack(s2);
console.log(s1); // "yours"
console.log(s2); // "hello" - JS에서는 여전히 사용 가능
console.log(s3); // "hello"
