import * as fs from "fs";

function main() {
    // expect("msg") -> 실패 시 커스텀 메시지로 throw
    let greetingFile: number;
    try {
        greetingFile = fs.openSync("hello.txt", "r");
    } catch {
        throw new Error("hello.txt should be included in this project");
    }
}

main();
