// Rust: if item == b' ' { return i; }
// JS 버전:
function firstWord(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      return i;
    }
  }
  return s.length;
}
