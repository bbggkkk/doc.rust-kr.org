// Rust: io::stdin().read_line(&mut guess).expect("Failed to read line");
// JS에서는 보통 비동기 방식으로 입력을 처리합니다.
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const answer = await new Promise((resolve) => rl.question("", resolve));
