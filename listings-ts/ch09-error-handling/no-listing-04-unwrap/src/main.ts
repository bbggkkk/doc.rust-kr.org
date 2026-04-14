import * as fs from "fs";

function main() {
    // unwrap() -> 실패 시 바로 throw
    const greetingFile = fs.openSync("hello.txt", "r");
    // fs.openSync은 실패 시 자동으로 예외를 던짐 (unwrap과 유사)
}

main();
