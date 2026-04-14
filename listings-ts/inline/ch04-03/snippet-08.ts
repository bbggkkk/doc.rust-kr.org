const s = "hello"; // Rust: String::from("hello")

const len = s.length; // Rust: s.len()

// Rust: 앞뒤 모두 생략하면 전체 문자열 슬라이스
const slice1 = s.slice(0, len); // Rust: &s[0..len]
const slice2 = s.slice();       // Rust: &s[..]  ← 전체 슬라이스
// 두 표현은 동일합니다
