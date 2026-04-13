// Config::build의 시그니처를 반복자로 변경
// Rust: fn build(mut args: impl Iterator<Item = String>) -> Result<Config, &'static str>
// JS에서는 이터러블을 인수로 받는 것이 가능합니다.

class Config {
  constructor(query, filePath) {
    this.query = query;
    this.filePath = filePath;
  }

  // JS에서 이터레이터를 받는 버전
  static build(args) {
    const iter = args[Symbol.iterator]();
    iter.next(); // 첫 번째 값(프로그램 이름) 건너뛰기
    const query = iter.next().value;
    const filePath = iter.next().value;

    if (!query || !filePath) {
      throw new Error("not enough arguments");
    }
    return new Config(query, filePath);
  }
}
