// Rust의 Iterator 트레이트 → JS의 이터러블 프로토콜
// JS에서는 Symbol.iterator와 next() 메서드로 구현
const myIterator = {
  items: [1, 2, 3],
  index: 0,
  [Symbol.iterator]() { return this; },
  next() {
    if (this.index < this.items.length) {
      return { value: this.items[this.index++], done: false };
    }
    return { value: undefined, done: true }; // Rust의 None에 해당
  }
};
