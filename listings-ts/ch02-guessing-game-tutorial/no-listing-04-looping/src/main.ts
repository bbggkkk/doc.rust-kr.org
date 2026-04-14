import * as readline from "readline";

function main() {
  // --생략--
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  console.log(`The secret number is: ${secretNumber}`);

  // Rust: loop { ... } -> 무한 루프
  while (true) {
    console.log("Please input your guess.");

    // --생략-- (입력 받기)

    if (guessNumber < secretNumber) {
      console.log("Too small!");
    } else if (guessNumber > secretNumber) {
      console.log("Too big!");
    } else {
      console.log("You win!");
    }
  }
}
