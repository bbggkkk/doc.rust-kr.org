import { readFileSync } from "fs";

// Rust의 fs::read_to_string → JS의 readFileSync
// 파일을 열고 내용을 읽는 것을 한 줄로 처리합니다.
function readUsernameFromFile() {
    try {
        return readFileSync("hello.txt", "utf-8");
    } catch (error) {
        throw error;
    }
}
