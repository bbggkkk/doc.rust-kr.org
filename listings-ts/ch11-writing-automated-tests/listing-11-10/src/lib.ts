function printsAndReturns10(a: number): number {
  console.log(`I got the value ${a}`);
  return 10;
}

// #[cfg(test)]
describe("tests", () => {
  test("this_test_will_pass", () => {
    const value = printsAndReturns10(4);
    expect(value).toBe(10);
  });

  test("this_test_will_fail", () => {
    const value = printsAndReturns10(8);
    expect(value).toBe(5);
  });
});
