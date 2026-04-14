// extern "C" — FFI(외래 함수 인터페이스): 다른 언어(C 등)의 함수를 호출
// TS/JS에서는 N-API(Node.js), WebAssembly 등으로 네이티브 코드와 상호작용

// Rust: extern "C" { fn abs(input: i32) -> i32; }
// TS에서 C 함수를 직접 호출할 수 없지만, Math.abs가 동일한 역할을 함
console.log(`Absolute value of -3 according to C: ${Math.abs(-3)}`);
