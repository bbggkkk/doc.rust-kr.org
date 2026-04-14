import * as readline from "readline";

function main() {
  // --생략--

  let guess = "";

  const rl = readline.createInterface({ input: process.stdin });
  rl.question("", (answer) => {
    guess = answer;
    if (!guess) throw new Error("Failed to read line");

    // Rust: let guess: u32 = guess.trim().parse().expect("Please type a number!");
    // 섀도잉(shadowing): 같은 이름의 변수를 다른 타입으로 재선언
    // JS에서는 같은 스코프 내에서 let으로 재선언 불가하므로 새 변수명 사용
    const guessNumber: number = parseInt(guess.trim());
    if (isNaN(guessNumber)) throw new Error("Please type a number!");

    console.log(`You guessed: ${guessNumber}`);

    if (guessNumber < secretNumber) {
      console.log("Too small!");
    } else if (guessNumber > secretNumber) {
      console.log("Too big!");
    } else {
      console.log("You win!");
    }
    rl.close();
  });
}
