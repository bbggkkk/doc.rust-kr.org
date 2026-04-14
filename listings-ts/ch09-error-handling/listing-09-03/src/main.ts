import * as fs from "fs";

function main() {
    // File::open -> fs.openSync (실패할 수 있음)
    // Rust의 Result와 달리 TS에서는 try-catch로 처리
    try {
        const greetingFile = fs.openSync("hello.txt", "r");
    } catch (error) {
        // Err 배리언트에 해당
    }
}

main();
