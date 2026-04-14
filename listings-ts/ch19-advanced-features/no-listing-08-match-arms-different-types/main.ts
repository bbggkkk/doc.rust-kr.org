// Rust: match 갈래의 타입이 일치하지 않으면 컴파일 에러
// TS에서도 삼항 연산자의 양쪽 타입이 다르면 유니온 타입이 됨

const guessStr = "3";
// Rust에서는 이 코드가 컴파일 에러 — 정수와 문자열을 동시에 반환 불가
// TS에서는 number | string 유니온 타입이 됨 (허용되지만 의도와 다를 수 있음)
const guess: number | string = guessStr === "3" ? 5 : "hello";
