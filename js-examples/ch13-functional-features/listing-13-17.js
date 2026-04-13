// Config::build의 clone 사용 버전 (예제 12-23 재현)
// Rust에서는 슬라이스를 빌려왔기 때문에 clone이 필요합니다.
// JS에서는 소유권 개념이 없어 clone이 불필요합니다.

class Config {
  constructor(query, filePath) {
    this.query = query;
    this.filePath = filePath;
  }

  static build(args) {
    if (args.length < 3) {
      throw new Error("not enough arguments");
    }
    // JS에서는 값 복사가 자동으로 이루어짐 (문자열은 불변)
    const query = args[1];
    const filePath = args[2];
    return new Config(query, filePath);
  }
}
