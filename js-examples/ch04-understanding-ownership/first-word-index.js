// Rust의 first_word(바이트 인덱스 반환 버전)에 대응하는 JS 코드

function firstWord(s) {
  const index = s.indexOf(" ");
  if (index === -1) {
    return s.length;
  }
  return index;
}

const s = "hello world";
const word = firstWord(s);
console.log(word); // 5
