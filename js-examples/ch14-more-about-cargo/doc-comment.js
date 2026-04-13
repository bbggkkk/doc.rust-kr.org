// Rust의 /// 문서화 주석 → JS의 JSDoc
// Rust: cargo doc으로 HTML 생성
// JS: jsdoc 도구로 HTML 문서 생성

/**
 * 주어진 숫자에 1을 더합니다.
 *
 * @param {number} x - 더할 숫자
 * @returns {number} 인수에 1을 더한 값
 *
 * @example
 * const result = addOne(5);
 * console.assert(result === 6);
 */
function addOne(x) {
  return x + 1;
}
