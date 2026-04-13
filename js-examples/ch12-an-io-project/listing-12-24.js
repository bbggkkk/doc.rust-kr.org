// eprintln! → console.error()
// println! → console.log() (stdout)
// eprintln! → console.error() (stderr)
const { Config, run } = require('./minigrep');

try {
  const config = new Config(process.argv);
  run(config);
} catch (err) {
  // 표준 에러(stderr)로 에러 메시지 출력
  console.error(`Problem parsing arguments: ${err.message}`);
  process.exit(1);
}

// 실행: node main.js > output.txt
// 에러 메시지는 화면에, 정상 출력은 파일에 저장됨
