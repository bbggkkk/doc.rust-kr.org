// Rust: io::stdin().read_line(&mut guess).expect("Failed to read line");
// 한 줄로 체이닝한 버전 (동작은 동일)
import * as readline from "readline";

const rl = readline.createInterface({ input: process.stdin });
rl.question("", (answer) => {
  const guess = answer; // 에러 시 throw new Error("Failed to read line")
  rl.close();
});
