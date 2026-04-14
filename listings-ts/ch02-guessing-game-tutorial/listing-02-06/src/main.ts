import * as readline from "readline";

function main() {
  console.log("Guess the number!");

  // Rust: rand::thread_rng().gen_range(1..=100)
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  // Rust: loop { ... } -> 무한 루프
  while (true) {
    console.log("Please input your guess.");

    // Rust: let mut guess = String::new()
    let guess = "";

    const rl = readline.createInterface({ input: process.stdin });
    // 동기적으로 표현 (실제로는 비동기이지만 개념 설명용)
    guess = await rl.question("");
    if (!guess) throw new Error("Failed to read line");

    // Rust: match guess.trim().parse() { Ok(num) => num, Err(_) => continue }
    // Result 타입의 match: 성공이면 값을 사용, 실패면 continue
    const parsed = parseInt(guess.trim());
    if (isNaN(parsed)) {
      continue; // 숫자가 아닌 입력은 무시하고 다시 요청
    }
    const guessNumber = parsed;

    console.log(`You guessed: ${guessNumber}`);

    // Rust: match guess.cmp(&secret_number) { ... }
    if (guessNumber < secretNumber) {
      console.log("Too small!");
    } else if (guessNumber > secretNumber) {
      console.log("Too big!");
    } else {
      console.log("You win!");
      break; // 정답이면 루프 종료
    }
  }
}

main();
