// Rust의 연관 타입 Item = u32 → TS에서는 제네릭 타입 매개변수로 number 지정

interface Iterator<Item> {
  next(): Item | null;
}

class Counter implements Iterator<number> {
  private count: number = 0;

  next(): number | null {
    // --생략--
    if (this.count < 5) {
      this.count += 1;
      return this.count;
    } else {
      return null;
    }
  }
}
