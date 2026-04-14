import * as fs from "fs";

// main()이 void를 반환하면 ? 사용 불가
// TS에서는 최상위 스코프에서도 try-catch 가능하지만,
// Rust에서는 main의 반환 타입이 Result여야 ? 사용 가능
function main(): void {
    // Rust: let greeting_file = File::open("hello.txt")?;
    // main이 ()를 반환하므로 ? 사용 불가 -> 컴파일 에러
    const greetingFile = fs.openSync("hello.txt", "r");
}

main();
