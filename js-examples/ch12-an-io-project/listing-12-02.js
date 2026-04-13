// 커맨드 라인 인수를 변수에 저장하기
// process.argv[0] = 'node', process.argv[1] = 스크립트 경로
const args = process.argv;
const query = args[2];
const filePath = args[3];

console.log(`Searching for: ${query}`);
console.log(`In file: ${filePath}`);
