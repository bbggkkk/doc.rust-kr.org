// std::env::var("IGNORE_CASE") → process.env.IGNORE_CASE
const fs = require('fs');

class Config {
  constructor(args) {
    if (args.length < 4) {
      throw new Error('not enough arguments');
    }
    this.query = args[2];
    this.filePath = args[3];
    // 환경 변수 확인: env::var("IGNORE_CASE").is_ok()
    this.ignoreCase = !!process.env.IGNORE_CASE;
  }
}

function search(query, contents) {
  return contents.split('\n').filter(line => line.includes(query));
}

function searchCaseInsensitive(query, contents) {
  const lowerQuery = query.toLowerCase();
  return contents.split('\n').filter(line =>
    line.toLowerCase().includes(lowerQuery)
  );
}

function run(config) {
  const contents = fs.readFileSync(config.filePath, 'utf8');
  const results = config.ignoreCase
    ? searchCaseInsensitive(config.query, contents)
    : search(config.query, contents);

  for (const line of results) {
    console.log(line);
  }
}

module.exports = { Config, run, search, searchCaseInsensitive };

// 실행: IGNORE_CASE=1 node main.js to poem.txt
