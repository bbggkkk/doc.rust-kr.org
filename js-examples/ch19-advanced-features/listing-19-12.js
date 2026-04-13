// 예제 19-12: Iterator 트레이트의 연관 타입
// JS에서는 Symbol.iterator 프로토콜이 Iterator 패턴에 해당합니다.
// TypeScript의 제네릭 인터페이스로 연관 타입을 표현할 수 있습니다.

// JS Iterator 프로토콜 구현
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

// TypeScript에서의 연관 타입:
// interface Iterator<Item> {
//   next(): { value: Item; done: boolean };
// }
