import * as readline from "readline";

// Rust: io::stdin().read_line(&mut guess)
// &mut guess -> 가변 참조자: 소유권을 넘기지 않고 값을 변경할 수 있게 빌려줌
const rl = readline.createInterface({ input: process.stdin });
rl.question("", (answer) => {
  guess = answer;
  rl.close();
});
