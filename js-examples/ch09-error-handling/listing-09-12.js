import { readFileSync } from "fs";

// Rust의 main이 Result를 반환 → 프로세스 종료 코드 결정
// JS/Node.js에서는 process.exitCode로 유사하게 처리
try {
    const greetingFile = readFileSync("hello.txt");
    process.exitCode = 0; // Ok(())에 해당
} catch (e) {
    console.error(e.message);
    process.exitCode = 1; // Err에 해당
}
