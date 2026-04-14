class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  canHold(other: Rectangle): boolean {
    return this.width > other.width && this.height > other.height;
  }
}
