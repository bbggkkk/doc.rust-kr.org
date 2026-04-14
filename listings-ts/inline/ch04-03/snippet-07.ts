const s = "hello"; // Rust: String::from("hello")

const len = s.length; // Rust: s.len()

// Rust의 범위 표현법에서 끝 인덱스 생략 가능
const slice1 = s.slice(3, len); // Rust: &s[3..len]
const slice2 = s.slice(3);      // Rust: &s[3..]  ← 끝 생략 가능
// 두 표현은 동일합니다
