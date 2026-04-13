// Rust: 제네릭을 사용한 Iterator 트레이트의 가상 정의
// JavaScript에서는 이터레이터 프로토콜을 사용합니다

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
  console.log(val); // 1, 2, 3, 4, 5
}
