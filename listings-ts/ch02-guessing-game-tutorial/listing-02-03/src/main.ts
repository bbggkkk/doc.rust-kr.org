import * as readline from "readline";

// Rust: use rand::Rng -> 외부 크레이트 사용 (npm 패키지와 유사)
function main() {
  console.log("Guess the number!");

  // Rust: rand::thread_rng().gen_range(1..=100)
  // 1~100 범위의 난수 생성
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  console.log(`The secret number is: ${secretNumber}`);

  console.log("Please input your guess.");

  let guess = "";

  const rl = readline.createInterface({ input: process.stdin });
  rl.question("", (answer) => {
    guess = answer;
    if (!guess) throw new Error("Failed to read line");
    console.log(`You guessed: ${guess}`);
    rl.close();
  });
}

main();
