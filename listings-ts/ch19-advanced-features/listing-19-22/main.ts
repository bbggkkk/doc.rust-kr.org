// 슈퍼트레이트: Rust의 trait OutlinePrint: fmt::Display
// → TS의 interface extends 패턴

// Rust: trait OutlinePrint: fmt::Display { ... }
// TS: interface A extends B — B의 기능을 요구
interface Displayable {
  toString(): string;
}

interface OutlinePrint extends Displayable {
  outlinePrint(): void;
}

// 기본 구현을 가진 mixin으로 표현
function outlinePrint(self: Displayable): void {
  const output = self.toString();
  const len = output.length;
  console.log("*".repeat(len + 4));
  console.log(`*${" ".repeat(len + 2)}*`);
  console.log(`* ${output} *`);
  console.log(`*${" ".repeat(len + 2)}*`);
  console.log("*".repeat(len + 4));
}
