// JS 문자열은 이미 불변(immutable)이므로
// &str과 유사하게 동작합니다.

function firstWord(s) {
  const index = s.indexOf(" ");
  if (index === -1) {
    return s;
  }
  return s.slice(0, index);
}

const myString = "hello world";

// String 전체 또는 일부에 대해 동작
const word1 = firstWord(myString.slice(0, 6));
const word2 = firstWord(myString);

// 문자열 리터럴에 대해서도 동작
const myStringLiteral = "hello world";
const word3 = firstWord(myStringLiteral);

console.log(word1, word2, word3); // "hello" "hello" "hello"
