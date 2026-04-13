import { promises as fs } from "fs";

// Rust의 ? 연산자: 에러 시 즉시 반환, 성공 시 값을 꺼냄
// JS의 await가 가장 유사 — Promise 실패 시 예외를 throw함
async function readUsernameFromFile() {
    // await은 ?처럼 성공 시 값을 꺼내고, 실패 시 예외를 throw
    const data = await fs.readFile("hello.txt", "utf-8");
    return data;
}
