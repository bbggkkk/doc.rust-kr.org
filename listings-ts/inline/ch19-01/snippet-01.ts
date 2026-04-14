// extern "C" — FFI(외래 함수 인터페이스): 다른 언어에서 호출할 수 있는 함수 내보내기
// TS/JS에서는 N-API(Node.js), WebAssembly 등으로 네이티브 바인딩을 제공

// Rust: #[no_mangle] pub extern "C" fn call_from_c() { ... }
// TS에서는 export로 함수를 외부에 노출
export function callFromC(): void {
  console.log("Just called a Rust function from C!");
}
