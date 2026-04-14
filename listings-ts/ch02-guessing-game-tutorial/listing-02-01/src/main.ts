// Rust의 use std::io -> Node.js의 readline 모듈 import
import * as readline from "readline";

function main() {
  console.log("Guess the number!");
  console.log("Please input your guess.");

  // Rust: let mut guess = String::new()
  // mut(가변) 키워드가 있어야 나중에 값을 변경할 수 있음
  let guess = "";

  // Rust: io::stdin().read_line(&mut guess)
  // &mut guess는 guess의 가변 참조자를 넘김 (소유권을 넘기지 않고 값을 변경할 수 있게 함)
  const rl = readline.createInterface({ input: process.stdin });
  rl.question("", (answer) => {
    guess = answer;
    // .expect("Failed to read line")는 에러 시 프로그램을 종료시킴
    // JS에서는 try-catch에 해당
    console.log(`You guessed: ${guess}`);
    rl.close();
  });
}

main();
