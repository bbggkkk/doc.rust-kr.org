// #[ignore] → test.skip() 또는 xit()
test('it_works', () => {
  const result = 2 + 2;
  expect(result).toBe(4);
});

// 느린 테스트를 건너뛰기
test.skip('expensive_test', () => {
  // 오래 걸리는 코드...
});
