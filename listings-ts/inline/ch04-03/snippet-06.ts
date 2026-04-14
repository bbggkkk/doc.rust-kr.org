const s = "hello"; // Rust: String::from("hello")

// Rust의 범위 표현법에서 시작 인덱스 생략 가능
const slice1 = s.slice(0, 2); // Rust: &s[0..2]
const slice2 = s.slice(0, 2); // Rust: &s[..2]  ← 0 생략 가능
// 두 표현은 동일합니다
