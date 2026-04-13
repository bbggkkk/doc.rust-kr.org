// #[should_panic] → expect(() => ...).toThrow()
class Guess {
  constructor(value) {
    if (value < 1 || value > 100) {
      throw new Error(`Guess value must be between 1 and 100, got ${value}.`);
    }
    this.value = value;
  }
}

test('greater_than_100', () => {
  expect(() => new Guess(200)).toThrow();
});
