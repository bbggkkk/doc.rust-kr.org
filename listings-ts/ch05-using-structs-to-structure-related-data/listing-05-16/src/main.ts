class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // 여러 impl 블록 → TS에서는 하나의 class에 모두 정의
  area(): number {
    return this.width * this.height;
  }

  canHold(other: Rectangle): boolean {
    return this.width > other.width && this.height > other.height;
  }
}
