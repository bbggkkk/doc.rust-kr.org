// Rust: let slice = &s[0..len]; 또는 let slice = &s[..];
const s = "hello";
const slice1 = s.slice(0, s.length); // "hello"
const slice2 = s.slice(); // "hello" — 동일
