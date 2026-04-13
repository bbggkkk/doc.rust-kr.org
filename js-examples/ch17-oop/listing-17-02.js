// Rust의 impl 블록 메서드 → JS의 class 메서드 (캡슐화)

class AveragedCollection {
  #list = [];
  #average = 0;

  add(value) {
    this.#list.push(value);
    this.#updateAverage();
  }

  remove() {
    const result = this.#list.pop();
    if (result !== undefined) {
      this.#updateAverage();
      return result;
    }
    return undefined;
  }

  average() {
    return this.#average;
  }

  #updateAverage() {
    const total = this.#list.reduce((sum, v) => sum + v, 0);
    this.#average = total / this.#list.length;
  }
}

// 사용 예시
const col = new AveragedCollection();
col.add(10);
col.add(20);
console.log(col.average()); // 15
col.remove();
console.log(col.average()); // 10
