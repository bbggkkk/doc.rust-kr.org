// --생략--
class Guess {
  private value: number;

  constructor(value: number) {
    if (value < 1) {
      throw new Error(
        `Guess value must be greater than or equal to 1, got ${value}.`
      );
    } else if (value > 100) {
      throw new Error(
        `Guess value must be less than or equal to 100, got ${value}.`
      );
    }
    this.value = value;
  }
}

// #[cfg(test)]
describe("tests", () => {
  // #[should_panic(expected = "less than or equal to 100")]
  test("greater_than_100", () => {
    expect(() => new Guess(200)).toThrow("less than or equal to 100");
  });
});
