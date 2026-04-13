// Rust: io::stdin().read_line(&mut guess)
// Node.js에서는 readline 모듈을 사용합니다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (answer) => {
  guess = answer;
  rl.close();
});
