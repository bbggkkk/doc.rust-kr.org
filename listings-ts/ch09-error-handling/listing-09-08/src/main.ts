import * as fs from "fs";

// ? 연산자 체이닝 -> TS에서는 자연스럽게 체이닝
function readUsernameFromFile(): string {
    // File::open("hello.txt")?.read_to_string(&mut username)?
    // -> 메서드 체이닝으로 한 줄에 처리
    return fs.readFileSync("hello.txt", "utf-8");
}
