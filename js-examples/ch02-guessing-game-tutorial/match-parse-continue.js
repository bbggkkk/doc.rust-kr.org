// Rust: let guess: u32 = match guess.trim().parse() {
//           Ok(num) => num,
//           Err(_) => continue,
//       };
// JS에서는 try-catch 또는 조건문으로 처리합니다.
const guessNum = parseInt(guess.trim(), 10);
if (isNaN(guessNum)) {
  continue; // 숫자가 아니면 다음 반복으로
}
