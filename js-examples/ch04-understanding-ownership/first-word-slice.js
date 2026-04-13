// Rust의 first_word(슬라이스 반환 버전)에 대응하는 JS 코드
// Rust: &s[0..i] → JS: s.slice(0, i)

function firstWord(s) {
  const index = s.indexOf(" ");
  if (index === -1) {
    return s;
  }
  return s.slice(0, index);
}

console.log(firstWord("hello world")); // "hello"
console.log(firstWord("hello"));       // "hello"
