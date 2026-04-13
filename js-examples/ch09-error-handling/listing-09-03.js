import { readFileSync } from "fs";

// Rust의 File::open은 Result를 반환합니다.
// JS에서는 파일 열기가 실패하면 예외를 던집니다.
// 결과를 변수에 담아두는 것은 동일합니다.
try {
    const greetingFileResult = readFileSync("hello.txt");
} catch (error) {
    // JS에서는 오류 발생 시 여기로 옵니다
    console.error(error.message);
}
