// Rust: let expensive_closure = |num: u32| -> u32 { ... num };
// TypeScript에서는 화살표 함수로 표현
const expensiveClosure = (num: number): number => {
  console.log("calculating slowly...");
  // thread::sleep → 동기 대기 (JS에서는 보통 await 사용)
  return num;
};
