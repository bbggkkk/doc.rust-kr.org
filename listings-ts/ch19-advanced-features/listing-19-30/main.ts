// Rust: #[derive(HelloMacro)] — derive 매크로로 트레이트 자동 구현
// TS에서 가장 유사한 것은 데코레이터 (conceptual similarity)

// Rust의 derive 매크로 ≈ TS의 클래스 데코레이터
function HelloMacro<T extends { new (...args: any[]): {} }>(constructor: T) {
  constructor.prototype.helloMacro = function () {
    console.log(`Hello, Macro! My name is ${constructor.name}!`);
  };
}

@HelloMacro
class Pancakes {}

(Pancakes.prototype as any).helloMacro(); // "Hello, Macro! My name is Pancakes!"
