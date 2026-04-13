import { readFileSync } from "fs";

// Rust에서는 main 함수의 반환 타입이 ()이면 ? 연산자를 사용할 수 없습니다.
// JS에서는 이런 제약이 없습니다 — 어디서든 예외를 던지거나 catch할 수 있습니다.
// 아래 코드는 JS에서 아무 문제 없이 동작합니다.
const greetingFile = readFileSync("hello.txt");
