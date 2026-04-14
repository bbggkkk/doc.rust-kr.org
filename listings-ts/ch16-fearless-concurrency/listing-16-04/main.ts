// Rust에서는 스레드가 참조하는 값을 메인 스레드에서 drop하면
// 댕글링 참조가 발생하므로 컴파일 에러입니다.
// JS에서는 GC가 참조를 추적하므로 이런 문제가 발생하지 않습니다.

let v: number[] | null = [1, 2, 3];

// Worker에서 v를 사용하려 하지만...
setTimeout(() => {
  // JS에서는 v가 null이 되었을 수 있음
  console.log("Here's a vector:", v); // null 출력!
}, 100);

v = null; // Rust: drop(v) → JS: 참조 해제

// Rust: 컴파일러가 이런 위험을 미리 방지
// JS: 런타임에 null 참조 문제 발생 가능
