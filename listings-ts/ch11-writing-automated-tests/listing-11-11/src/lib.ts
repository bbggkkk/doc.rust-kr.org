function addTwo(a: number): number {
  return a + 2;
}

// #[cfg(test)]
describe("tests", () => {
  test("add_two_and_two", () => {
    expect(addTwo(2)).toBe(4);
  });

  test("add_three_and_two", () => {
    expect(addTwo(3)).toBe(5);
  });

  test("one_hundred", () => {
    expect(addTwo(100)).toBe(102);
  });
});
