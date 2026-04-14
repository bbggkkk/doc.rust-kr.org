import * as fs from "fs";

// --생략--
const args: string[] = process.argv;
const query = args[2];
const filePath = args[3];

console.log(`In file ${filePath}`);

// fs::read_to_string(file_path) → fs.readFileSync(path, 'utf8')
const contents = fs.readFileSync(filePath, "utf8");

console.log(`With text:\n${contents}`);
