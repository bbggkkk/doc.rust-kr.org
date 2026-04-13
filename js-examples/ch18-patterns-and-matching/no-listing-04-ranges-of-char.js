// Rust의 char 범위 패턴 → JS의 문자 코드 비교

const x = "c";

if (x >= "a" && x <= "j") {
  console.log("early ASCII letter");
} else if (x >= "k" && x <= "z") {
  console.log("late ASCII letter");
} else {
  console.log("something else");
}
