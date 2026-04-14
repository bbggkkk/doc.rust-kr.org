import * as readline from "readline";

function main() {
  // --생략--

  while (true) {
    // --생략-- (입력 받기)

    if (guessNumber < secretNumber) {
      console.log("Too small!");
    } else if (guessNumber > secretNumber) {
      console.log("Too big!");
    } else {
      console.log("You win!");
      break; // Rust: break -> 루프 종료
    }
  }
}
