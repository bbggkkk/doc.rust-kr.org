// src/lib.rs → 별도 모듈 (minigrep.js)
// Config 구조체와 run 함수를 모듈로 분리
const fs = require('fs');

class Config {
  constructor(args) {
    if (args.length < 4) {
      throw new Error('not enough arguments');
    }
    this.query = args[2];
    this.filePath = args[3];
  }
}

function run(config) {
  const contents = fs.readFileSync(config.filePath, 'utf8');

  for (const line of contents.split('\n')) {
    if (line.includes(config.query)) {
      console.log(line);
    }
  }
}

module.exports = { Config, run };
