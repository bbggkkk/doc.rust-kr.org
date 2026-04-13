// 비공개 함수 테스트하기
// JavaScript에서는 모듈 내부 함수를 테스트용으로 export할 수 있음

function addTwo(a) {
  return internalAdder(a, 2);
}

// 내부 함수 (Rust의 비공개 함수에 해당)
function internalAdder(a, b) {
  return a + b;
}

// 테스트를 위해 export
module.exports = { addTwo, internalAdder };

// 테스트 파일에서:
test('internal', () => {
  const { internalAdder } = require('./listing-11-12');
  expect(internalAdder(2, 2)).toBe(4);
});
