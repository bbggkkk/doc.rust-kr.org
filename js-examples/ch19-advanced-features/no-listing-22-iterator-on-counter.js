// Rust: Counter에 대한 Iterator 트레이트 구현 (Item = u32)
// JavaScript에서는 Symbol.iterator를 구현합니다

class Counter {
  constructor() {
    this.count = 0;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    this.count += 1;
    if (this.count <= 5) {
      return { value: this.count, done: false };
    }
    return { value: undefined, done: true };
  }
}

for (const val of new Counter()) {
  console.log(val);
}
