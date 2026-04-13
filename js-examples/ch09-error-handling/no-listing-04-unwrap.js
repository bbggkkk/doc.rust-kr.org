import { readFileSync } from "fs";

// unwrap()은 에러 처리 없이 값을 꺼냄 — 실패하면 즉시 종료
// JS에서는 try/catch 없이 호출하는 것과 유사
const greetingFile = readFileSync("hello.txt"); // 실패 시 예외 발생
