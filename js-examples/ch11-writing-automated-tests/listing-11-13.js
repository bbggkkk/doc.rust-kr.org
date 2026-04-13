// 통합 테스트 (별도의 테스트 파일)
// Rust의 tests/ 디렉터리 → Jest의 __tests__/ 디렉터리 또는 *.test.js 파일
// 파일명: __tests__/integration.test.js

const { addTwo } = require('../src/adder');

test('it_adds_two', () => {
  expect(addTwo(2)).toBe(4);
});
