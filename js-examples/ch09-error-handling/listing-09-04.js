import { readFileSync } from "fs";

// Rust의 match on Result → JS의 try/catch
try {
    const greetingFile = readFileSync("hello.txt");
    // Ok(file) 에 해당 — 파일 핸들 사용
} catch (error) {
    // Err(error) 에 해당
    throw new Error(`Problem opening the file: ${error.message}`);
}
