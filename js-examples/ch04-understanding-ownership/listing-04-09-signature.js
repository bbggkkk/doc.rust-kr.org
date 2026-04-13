// Rust: fn first_word(s: &str) -> &str
// &String 대신 &str을 사용하면 더 범용적입니다.
// JS에서는 타입 구분이 없으므로 동일합니다.
function firstWord(s) {
  const idx = s.indexOf(" ");
  return idx === -1 ? s : s.slice(0, idx);
}
