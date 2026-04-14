// 버그: if 조건의 메시지가 뒤바뀜
class Guess {
  private value: number;

  constructor(value: number) {
    if (value < 1) {
      throw new Error(
        `Guess value must be less than or equal to 100, got ${value}.`
      );
    } else if (value > 100) {
      throw new Error(
        `Guess value must be greater than or equal to 1, got ${value}.`
      );
    }
    this.value = value;
  }
}
