// Rust: fn first_word(s: &String) -> &str
// JS에서는 매개변수 타입 구분 없이 문자열을 받습니다.
function firstWord(s) {
  const idx = s.indexOf(" ");
  return idx === -1 ? s : s.slice(0, idx);
}
