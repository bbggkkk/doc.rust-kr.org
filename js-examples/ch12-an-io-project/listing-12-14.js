// src/main.rs → 진입점 (main.js)
// 라이브러리 모듈을 가져와 사용
const { Config, run } = require('./minigrep');

try {
  const config = new Config(process.argv);
  run(config);
} catch (err) {
  console.error(`Problem parsing arguments: ${err.message}`);
  process.exit(1);
}
