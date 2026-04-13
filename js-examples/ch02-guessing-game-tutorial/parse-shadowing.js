// Rust: let guess: u32 = guess.trim().parse().expect("Please type a number!");
// JS에서는 같은 이름의 변수를 let으로 다시 선언할 수 없습니다 (같은 스코프에서).
// 대신 값을 재할당하거나 다른 이름을 사용합니다.
let guessStr = "  76  ";
let guessNum = parseInt(guessStr.trim(), 10);
if (isNaN(guessNum)) {
  throw new Error("Please type a number!");
}
