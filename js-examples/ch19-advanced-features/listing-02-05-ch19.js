// Rust: match에서 continue를 사용 (continue는 ! 타입)
// JavaScript에서도 continue를 사용할 수 있습니다

let num;
const guess = "42";

const parsed = parseInt(guess);
if (!isNaN(parsed)) {
  num = parsed;
} else {
  // continue에 해당 - 다시 시도
  console.log("다시 입력하세요");
}

console.log("guess:", num);
