function addTwo(a: number): number {
  return a + 2;
}

// #[cfg(test)]
describe("tests", () => {
  test("it_adds_two", () => {
    expect(addTwo(2)).toBe(4);
  });
});
