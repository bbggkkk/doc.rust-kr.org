// Rust: let bytes = s.as_bytes();
// JS에서는 문자열을 바이트 배열로 변환할 수 있습니다.
const s = "hello world";
const encoder = new TextEncoder();
const bytes = encoder.encode(s);
