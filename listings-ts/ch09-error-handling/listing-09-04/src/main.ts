import * as fs from "fs";

function main() {
    // match Result -> try-catch 패턴
    try {
        const greetingFile = fs.openSync("hello.txt", "r");
        // Ok(file) => file 에 해당
    } catch (error) {
        // Err(error) => panic! 에 해당
        throw new Error(`Problem opening the file: ${error}`);
    }
}

main();
