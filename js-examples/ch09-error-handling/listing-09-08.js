import { readFileSync } from "fs";

// Rust의 ? 연산자 체이닝 → JS의 동기 파일 읽기
// Rust에서는 File::open()?.read_to_string()으로 체이닝합니다.
// JS에서는 readFileSync가 열기와 읽기를 한번에 처리합니다.
function readUsernameFromFile() {
    try {
        return readFileSync("hello.txt", "utf-8");
    } catch (error) {
        throw error; // 에러 전파
    }
}
