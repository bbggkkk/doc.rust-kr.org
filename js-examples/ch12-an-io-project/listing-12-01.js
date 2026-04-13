// std::env::args() → process.argv
// Node.js에서 커맨드 라인 인수 읽기
const args = process.argv;
console.log(args);

// 실행: node main.js searchstring example-filename.txt
// 출력: ['node', 'main.js', 'searchstring', 'example-filename.txt']
