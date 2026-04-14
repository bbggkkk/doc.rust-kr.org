const s = "hello world"; // Rust: String::from("hello world")

// Rust: 문자열 슬라이스 = 원본 String의 일부를 참조하는 뷰(view)
const hello = s.slice(0, 5);  // Rust: &s[0..5] → "hello"
const world = s.slice(6, 11); // Rust: &s[6..11] → "world"

// JS의 slice()는 새 문자열을 생성하지만,
// Rust의 슬라이스(&str)는 원본 데이터의 참조자입니다 (복사 없이!)
// 슬라이스는 시작 포인터 + 길이로 구성됩니다
