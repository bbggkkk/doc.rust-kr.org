import * as fs from "fs";

// fs::read_to_string -> fs.readFileSync
function readUsernameFromFile(): string {
    return fs.readFileSync("hello.txt", "utf-8");
}
