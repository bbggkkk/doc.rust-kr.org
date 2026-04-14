// 절차적 매크로 구현: 컴파일 타임 코드 생성 (TS에는 동등한 기능 없음)
// Rust: quote! 매크로로 트레이트 구현 코드를 생성

// Rust의 impl_hello_macro가 하는 일을 TS 데코레이터로 표현:
function HelloMacro<T extends { new (...args: any[]): {} }>(constructor: T) {
  // Rust: stringify!(#name) → 타입 이름을 문자열로 변환
  const name = constructor.name;

  constructor.prototype.helloMacro = function () {
    console.log(`Hello, Macro! My name is ${name}!`);
  };
}
