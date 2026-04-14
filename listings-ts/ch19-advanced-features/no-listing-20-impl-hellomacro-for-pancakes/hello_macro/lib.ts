// Rust: pub trait HelloMacro { fn hello_macro(); }
// TS: 인터페이스로 표현

interface HelloMacro {
  helloMacro(): void;
}

export type { HelloMacro };
