// Rust의 다중 패턴 + 매치 가드 → JS의 조건문 조합

const x = 4;
const y = false;

if ((x === 4 || x === 5 || x === 6) && y) {
  console.log("yes");
} else {
  console.log("no");
}
