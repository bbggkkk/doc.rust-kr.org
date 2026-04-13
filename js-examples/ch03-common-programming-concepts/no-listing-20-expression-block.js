// Rust: let y = { let x = 3; x + 1 };
// JS에서는 즉시 실행 함수로 비슷하게 표현할 수 있습니다.
const y = (() => {
  const x = 3;
  return x + 1;
})();
console.log(`The value of y is: ${y}`); // 4
