// Rust: let slice = &s[3..len]; 또는 let slice = &s[3..];
const s = "hello";
const slice1 = s.slice(3, s.length); // "lo"
const slice2 = s.slice(3); // "lo" — 동일
