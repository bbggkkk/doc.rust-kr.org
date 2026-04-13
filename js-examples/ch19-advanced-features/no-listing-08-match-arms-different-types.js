// Rust: match 갈래의 타입 불일치 (컴파일 에러)
// JavaScript는 동적 타입이므로 한 변수에 어떤 타입이든 담을 수 있습니다

const guess = "hello";
let value;

const parsed = parseInt(guess);
if (!isNaN(parsed)) {
  value = parsed;          // 숫자
} else {
  value = "not a number";  // 문자열 — JS에서는 허용됩니다
}

console.log(value);
