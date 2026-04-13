// #[should_panic(expected = "...")] → expect(() => ...).toThrow("...")
class Guess {
  constructor(value) {
    if (value < 1) {
      throw new Error(
        `Guess value must be greater than or equal to 1, got ${value}.`
      );
    }
    if (value > 100) {
      throw new Error(
        `Guess value must be less than or equal to 100, got ${value}.`
      );
    }
    this.value = value;
  }
}

test('greater_than_100', () => {
  expect(() => new Guess(200)).toThrow('less than or equal to 100');
});
