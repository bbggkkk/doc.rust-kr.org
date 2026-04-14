// Rust에서는 컴파일 에러! JS에서는 정상 동작합니다
const s1 = "hello"; // Rust: String::from("hello")
const s2 = s1;       // Rust: s1 → s2로 소유권 이동 (move)

console.log(`${s1}, world!`); // JS: 정상 작동 ✅
// Rust: 컴파일 에러 ❌ - s1은 이미 s2로 이동되어 사용할 수 없습니다
// Rust는 이중 해제(double free)를 방지하기 위해 이전 소유자를 무효화합니다
