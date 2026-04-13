// JavaScript에서는 모든 경우를 처리하지 않아도 에러가 발생하지 않습니다

function plusOne(x) {
  if (x !== null && x !== undefined) {
    return x + 1;
  }
  // None 케이스를 처리하지 않음 — JavaScript는 이를 허용합니다
  // undefined가 암묵적으로 반환됩니다
  // Rust에서는 모든 경우를 처리해야 하므로 컴파일 에러가 발생합니다
}

console.log(plusOne(5));    // 6
console.log(plusOne(null)); // undefined (버그 가능성!)
