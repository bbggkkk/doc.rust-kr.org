import { readFileSync } from "fs";

// Rust의 에러 전파: Result를 반환하여 호출자가 처리하게 함
// JS에서는 예외가 자동으로 전파되거나, 명시적으로 다시 throw함
function readUsernameFromFile() {
    // JS 예외는 catch하지 않으면 자동으로 전파됨
    // Rust는 명시적으로 Err를 반환해야 함 — 이것이 핵심 차이점
    const data = readFileSync("hello.txt", "utf-8");
    return data; // 성공 시 값 반환 (Ok에 해당)
    // 실패 시 예외가 자동 전파됨 (Err 반환에 해당)
}
