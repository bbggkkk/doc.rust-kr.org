const s1 = "hello"; // Rust: String::from("hello")

// Rust: &s1으로 참조자를 전달 - 소유권은 s1에 그대로 남아있음
// JS에서는 기본적으로 참조 전달이므로 & 같은 특별한 문법이 필요 없습니다
const len = calculateLength(s1);
