// Config::build를 반복자로 개선하기 — JS 버전
// Rust에서는 반복자의 소유권을 가져와 next()로 순회하지만,
// JS에서는 배열 디스트럭처링으로 간단히 처리합니다.

class Config {
  constructor(args) {
    // args[0]은 프로그램 이름이므로 건너뜁니다
    const [, query, filePath] = args;

    if (!query) {
      throw new Error("Didn't get a query string");
    }
    if (!filePath) {
      throw new Error("Didn't get a file path");
    }

    this.query = query;
    this.filePath = filePath;
  }
}

// 사용 예시
const config = new Config(["program", "searchword", "poem.txt"]);
console.log(config.query); // "searchword"
console.log(config.filePath); // "poem.txt"
