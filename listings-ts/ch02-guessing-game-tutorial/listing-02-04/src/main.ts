import * as readline from "readline";

function main() {
  // --생략--

  console.log(`You guessed: ${guess}`);

  // Rust: match guess.cmp(&secret_number) { ... }
  // match 표현식 -> JS의 if-else 체인으로 변환
  // [주의] 이 코드는 Rust에서 컴파일되지 않음:
  // guess가 String이고 secret_number가 i32이므로 타입이 다름
  // Rust는 다른 타입 간 비교를 허용하지 않음 (JS와 다름!)
  if (guess < secretNumber) {
    console.log("Too small!");
  } else if (guess > secretNumber) {
    console.log("Too big!");
  } else {
    console.log("You win!");
  }
}
