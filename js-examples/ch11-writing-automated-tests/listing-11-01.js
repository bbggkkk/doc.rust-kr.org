// Jest 테스트 기본 구조
// Rust의 #[cfg(test)] + #[test] 에 해당

test('it_works', () => {
  const result = 2 + 2;
  expect(result).toBe(4);
});
