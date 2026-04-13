// Rust: let guess: u32 = guess.trim().parse().expect("Please type a number!");
// JS에서는 parseInt 또는 Number를 사용합니다.
const guess = Number(guessInput.trim());
if (isNaN(guess)) {
  throw new Error("Please type a number!");
}
