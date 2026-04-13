// JavaScript에서는 null/undefined와 숫자를 더할 수 있습니다 (Rust는 이를 방지합니다)

const x = 5;       // i8
const y = null;     // Option<i8>의 None에 해당

// JavaScript에서는 이것이 허용되지만 NaN이 됩니다
const sum = x + y;  // NaN
console.log(sum);   // NaN

// Rust에서는 Option<i8>과 i8을 직접 더할 수 없어서
// 컴파일 에러가 발생합니다. 이는 null 관련 버그를 방지합니다.
