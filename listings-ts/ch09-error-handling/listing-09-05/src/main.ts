import * as fs from "fs";

function main() {
    let greetingFile: number;

    try {
        greetingFile = fs.openSync("hello.txt", "r");
    } catch (error: any) {
        // error.kind() 매칭 -> error.code 확인
        if (error.code === "ENOENT") {
            // ErrorKind::NotFound -> ENOENT
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
