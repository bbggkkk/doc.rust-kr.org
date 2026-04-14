class Guess {
  private value: number;

  constructor(value: number) {
    if (value < 1 || value > 100) {
      throw new Error(
        `Guess value must be between 1 and 100, got ${value}.`
      );
    }
    this.value = value;
  }
}

// #[cfg(test)]
describe("tests", () => {
  // #[should_panic] — 패닉(예외)이 발생해야 통과
  test("greater_than_100", () => {
    expect(() => new Guess(200)).toThrow();
  });
});
