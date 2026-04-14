test("it_works", () => {
  expect(2 + 2).toBe(4);
});

// #[ignore] — jest에서는 test.skip 또는 xit 사용
test.skip("expensive_test", () => {
  // code that takes an hour to run
});
