// Rust: let bytes = s.as_bytes();
// 문자열을 바이트 배열로 변환하여 각 바이트를 순회할 준비
// JS에서는 문자열에 직접 인덱스로 접근 가능: s[0], s[1], ...
const bytes = Array.from(s); // 또는 [...s]
