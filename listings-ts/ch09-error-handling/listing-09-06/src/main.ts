import * as fs from "fs";

// Result<String, io::Error> -> string | throw Error
// 에러 전파: 함수가 에러를 던져 호출자에게 전달
function readUsernameFromFile(): string {
    let fd: number;
    try {
        fd = fs.openSync("hello.txt", "r");
    } catch (e) {
        throw e; // return Err(e) 에 해당
    }

    try {
        const username = fs.readFileSync(fd, "utf-8");
        return username; // Ok(username) 에 해당
    } catch (e) {
        throw e; // Err(e) 에 해당
    }
}
