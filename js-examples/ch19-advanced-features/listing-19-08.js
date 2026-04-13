// 예제 19-8: 외부 함수 호출 (extern "C")
// Rust의 extern "C"는 C 라이브러리와의 FFI에 해당합니다.
// Node.js에서는 N-API(node-addon-api)나 ffi-napi를 사용하여
// 네이티브 코드와 상호작용할 수 있습니다.

// Node.js N-API 예시 (개념적):
// const ffi = require('ffi-napi');
// const libm = ffi.Library('libm', {
//   'abs': ['int', ['int']]
// });
// console.log(libm.abs(-3)); // 3

// JS 내장 함수로 동일한 기능:
console.log(`Absolute value of -3: ${Math.abs(-3)}`);
