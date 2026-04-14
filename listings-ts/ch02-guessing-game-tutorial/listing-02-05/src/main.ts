import * as readline from "readline";

function main() {
  // --생략--

  while (true) {
    // --생략-- (입력 받기)

    // Rust: let guess: u32 = match guess.trim().parse() {
    //     Ok(num) => num,
    //     Err(_) => continue,
    // };
    // Result의 match -> try-catch + continue로 변환
    // Err(_)의 밑줄은 모든 에러를 캐치하는 캐치올(catchall) 패턴
    const parsed = parseInt(guess.trim());
    if (isNaN(parsed)) {
      continue; // 숫자가 아니면 다음 루프로 (프로그램 종료 대신 무시)
    }
    const guessNumber = parsed;

    console.log(`You guessed: ${guessNumber}`);

    // --생략--
  }
}
