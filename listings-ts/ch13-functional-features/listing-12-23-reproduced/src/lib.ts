class Config {
  query: string;
  filePath: string;
  ignoreCase: boolean;

  // Rust: pub fn build(args: &[String]) → 슬라이스를 인덱싱으로 접근
  // clone()으로 값 복사 — 비효율적
  static build(args: string[]): Config {
    if (args.length < 3) {
      throw new Error("not enough arguments");
    }

    const query = args[1];    // Rust에서는 .clone() 필요
    const filePath = args[2]; // Rust에서는 .clone() 필요

    const ignoreCase = process.env.IGNORE_CASE !== undefined;

    return new Config(query, filePath, ignoreCase);
  }

  constructor(query: string, filePath: string, ignoreCase: boolean) {
    this.query = query;
    this.filePath = filePath;
    this.ignoreCase = ignoreCase;
  }
}
