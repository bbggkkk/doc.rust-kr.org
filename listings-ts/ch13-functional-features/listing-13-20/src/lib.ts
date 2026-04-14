class Config {
  query: string;
  filePath: string;
  ignoreCase: boolean;

  // Rust: Iterator의 next() 메서드로 인수를 하나씩 꺼냄
  // clone() 없이 소유권을 직접 이동 → 효율적
  static build(args: Iterable<string>): Config {
    const iter = args[Symbol.iterator]();

    iter.next(); // 첫 번째 값(프로그램 이름) 건너뛰기

    const queryResult = iter.next();
    if (queryResult.done) throw new Error("Didn't get a query string");
    const query = queryResult.value;

    const filePathResult = iter.next();
    if (filePathResult.done) throw new Error("Didn't get a file path");
    const filePath = filePathResult.value;

    const ignoreCase = process.env.IGNORE_CASE !== undefined;

    return new Config(query, filePath, ignoreCase);
  }

  constructor(query: string, filePath: string, ignoreCase: boolean) {
    this.query = query;
    this.filePath = filePath;
    this.ignoreCase = ignoreCase;
  }
}
