import * as fs from "fs";
// unwrap_or_else 패턴 -> try-catch + 조건 분기
function main() {
    let greetingFile: number;
    try {
        greetingFile = fs.openSync("hello.txt", "r");
    } catch (error: any) {
        if (error.code === "ENOENT") {
            try {
                greetingFile = fs.openSync("hello.txt", "w");
            } catch (e) {
                throw new Error(`Problem creating the file: ${e}`);
            }
        } else {
            throw new Error(`Problem opening the file: ${error}`);
        }
    }
}

main();
