// --생략-- (버그가 있는 구현: value > 100 조건 누락)
class Guess {
  private value: number;

  constructor(value: number) {
    if (value < 1) {
      throw new Error(
        `Guess value must be between 1 and 100, got ${value}.`
      );
    }
    this.value = value;
  }
}
