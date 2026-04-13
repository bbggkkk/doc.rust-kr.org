// Rust: let expensive_closure = |num: u32| -> u32 { ... num };
// JS에서는 타입 명시가 없지만, 동일한 클로저 패턴
const expensiveClosure = (num) => {
  console.log("calculating slowly...");
  return num;
};
