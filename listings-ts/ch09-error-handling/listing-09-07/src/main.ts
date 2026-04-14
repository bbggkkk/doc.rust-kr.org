import * as fs from "fs";

// ? 연산자 -> TS에서는 예외가 자동 전파됨
// Rust의 ?는 에러 시 즉시 반환하는 숏컷
function readUsernameFromFile(): string {
    // File::open("hello.txt")? -> 실패 시 즉시 에러 전파
    const fd = fs.openSync("hello.txt", "r"); // ?는 에러 시 즉시 반환
    const username = fs.readFileSync(fd, "utf-8"); // ?는 에러 시 즉시 반환
    return username;
}
