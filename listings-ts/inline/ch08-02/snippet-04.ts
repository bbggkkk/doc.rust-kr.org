const hello = "Здравствуйте";

// Rust: &hello[0..4] → 첫 4바이트 = "Зд" (UTF-8 기준)
// TypeScript: slice는 UTF-16 코드 유닛 기준
const s = hello.slice(0, 2); // "Зд" (각 키릴 문자가 1 코드 유닛)
