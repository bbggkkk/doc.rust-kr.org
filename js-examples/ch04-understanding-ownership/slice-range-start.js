// Rust: let slice = &s[0..2]; 또는 let slice = &s[..2];
const s = "hello";
const slice1 = s.slice(0, 2); // "he"
const slice2 = s.slice(0, 2); // "he" — 동일
