// unsafe 블록: Rust 컴파일러의 안전성 검사를 우회 (JS/TS에는 해당 개념 없음)
// Rust의 static mut → 가변 전역 변수 (멀티스레드에서 데이터 경합 위험)
// TS/JS는 싱글스레드이므로 전역 변수 접근이 기본적으로 안전함

let COUNTER: number = 0;

function addToCount(inc: number): void {
  // Rust에서는 unsafe 블록 필요
  COUNTER += inc;
}

addToCount(3);

console.log(`COUNTER: ${COUNTER}`);
