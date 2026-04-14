import * as fs from "fs";

// main() -> Result<(), Box<dyn Error>>
// TS에서는 main이 에러를 던지면 프로세스가 비정상 종료
function main(): void {
    // ?를 main에서 사용 가능 (반환 타입이 Result이므로)
    const greetingFile = fs.openSync("hello.txt", "r");
    // 성공 시 Ok(()) 반환에 해당
}

try {
    main();
    process.exit(0); // Ok(()) -> 종료 코드 0
} catch {
    process.exit(1); // Err -> 종료 코드 non-zero
}
