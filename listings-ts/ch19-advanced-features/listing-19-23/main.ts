// 뉴타입 패턴: Vec<String>을 감싸는 Wrapper 타입
// TS에서는 branded type 또는 래퍼 클래스로 표현

class Wrapper {
  constructor(private inner: string[]) {}

  // Rust: impl fmt::Display for Wrapper
  toString(): string {
    return `[${this.inner.join(", ")}]`;
  }
}

const w = new Wrapper(["hello", "world"]);
console.log(`w = ${w.toString()}`);
