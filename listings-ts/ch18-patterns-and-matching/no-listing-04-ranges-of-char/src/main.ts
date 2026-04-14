const x = "c";

// char 범위 매칭 → 문자 코드 비교
if (x >= "a" && x <= "j") {
  console.log("early ASCII letter");
} else if (x >= "k" && x <= "z") {
  console.log("late ASCII letter");
} else {
  console.log("something else");
}
