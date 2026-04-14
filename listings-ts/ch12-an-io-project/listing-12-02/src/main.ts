// std::env::args() → process.argv
const args: string[] = process.argv;

// process.argv[0]은 node, [1]은 스크립트 경로
const query = args[2];
const filePath = args[3];

console.log(`Searching for ${query}`);
console.log(`In file ${filePath}`);
