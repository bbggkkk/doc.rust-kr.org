// std::fs::read_to_string() → fs.readFileSync()
const fs = require('fs');

const args = process.argv;
const query = args[2];
const filePath = args[3];

console.log(`Searching for: ${query}`);
console.log(`In file: ${filePath}`);

const contents = fs.readFileSync(filePath, 'utf8');

console.log(`With text:\n${contents}`);
