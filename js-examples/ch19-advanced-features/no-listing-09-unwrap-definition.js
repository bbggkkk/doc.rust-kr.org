// Rust: Option의 unwrap 정의 (None이면 panic!)
// JavaScript에서는 null 검사로 비슷한 패턴을 구현합니다

function unwrap(option) {
  if (option !== null && option !== undefined) {
    return option;
  }
  throw new Error("called unwrap on a None value");
}

console.log(unwrap(42));   // 42
// unwrap(null);           // Error 발생
