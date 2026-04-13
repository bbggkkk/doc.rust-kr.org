import { readFileSync, writeFileSync } from "fs";

// Rust의 중첩 match로 에러 종류별 처리 → JS의 에러 코드 분기
try {
    const greetingFile = readFileSync("hello.txt");
} catch (error) {
    if (error.code === "ENOENT") {
        // ErrorKind::NotFound에 해당
        try {
            writeFileSync("hello.txt", "");
        } catch (e) {
            throw new Error(`Problem creating the file: ${e.message}`);
        }
    } else {
        throw new Error(`Problem opening the file: ${error.message}`);
    }
}
