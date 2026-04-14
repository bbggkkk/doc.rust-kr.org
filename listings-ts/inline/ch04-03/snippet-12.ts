const myString = "hello world"; // Rust: String::from("hello world")

// Rust에서는 &str 매개변수로 다양한 형태를 받을 수 있습니다:
let word = firstWord(myString.slice(0, 6)); // Rust: &my_string[0..6]
word = firstWord(myString.slice());          // Rust: &my_string[..] (전체 슬라이스)
word = firstWord(myString);                  // Rust: &my_string (역참조 강제 변환)

const myStringLiteral = "hello world";       // Rust: &str 타입

word = firstWord(myStringLiteral.slice(0, 6)); // Rust: &my_string_literal[0..6]
word = firstWord(myStringLiteral.slice());      // Rust: &my_string_literal[..]
word = firstWord(myStringLiteral);              // Rust: 문자열 리터럴은 이미 &str!
// JS에서는 이 모든 것이 단순히 string 타입입니다
