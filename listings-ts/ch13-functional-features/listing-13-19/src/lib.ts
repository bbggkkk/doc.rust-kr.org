class Config {
  query: string;
  filePath: string;
  ignoreCase: boolean;

  // Rust: pub fn build(mut args: impl Iterator<Item = String>)
  // 슬라이스 대신 이터레이터를 받도록 변경
  // JS에서는 Iterable을 받을 수 있음
  static build(args: Iterable<string>): Config {
    const iter = args[Symbol.iterator]();
    // --생략--
    return new Config("", "", false);
  }

  constructor(query: string, filePath: string, ignoreCase: boolean) {
    this.query = query;
    this.filePath = filePath;
    this.ignoreCase = ignoreCase;
  }
}
