import { readFileSync } from "fs";

// expect("메시지")는 unwrap과 같지만 에러 메시지를 지정할 수 있음
// JS에서는 try/catch로 에러 메시지를 커스터마이징
try {
    const greetingFile = readFileSync("hello.txt");
} catch (e) {
    throw new Error(`hello.txt should be included in this project: ${e.message}`);
}
