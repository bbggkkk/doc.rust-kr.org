// Rust: if let Some(x) = some_option_value → 반박 가능한 패턴
// JS: null/undefined 체크로 동일한 패턴
const someOptionValue = null; // 또는 어떤 값

if (someOptionValue !== null && someOptionValue !== undefined) {
    const x = someOptionValue;
    console.log(x);
}
// JS에서는 let으로 null 할당이 자유롭지만,
// Rust는 let에 반박 가능한 패턴을 사용하면 컴파일 에러 발생
