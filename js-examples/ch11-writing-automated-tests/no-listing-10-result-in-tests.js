// Result<T, E>를 이용한 테스트 → try/catch 또는 async/await
test('it_works', () => {
  const result = 2 + 2;
  if (result !== 4) {
    throw new Error(`2 + 2 did not equal 4, got ${result}`);
  }
  // 성공 시 아무것도 throw하지 않음 (Ok(())에 해당)
});
