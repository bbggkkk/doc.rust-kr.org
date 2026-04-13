// Rust의 struct + 비공개 필드 → JS의 class + #private 필드

class AveragedCollection {
  #list = [];
  #average = 0;

  get average() {
    return this.#average;
  }

  add(value) {
    this.#list.push(value);
    this.#updateAverage();
  }

  remove() {
    const result = this.#list.pop();
    if (result !== undefined) {
      this.#updateAverage();
    }
    return result;
  }

  #updateAverage() {
    const total = this.#list.reduce((sum, v) => sum + v, 0);
    this.#average = total / this.#list.length;
  }
}
