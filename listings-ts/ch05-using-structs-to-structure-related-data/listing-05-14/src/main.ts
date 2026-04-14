class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  canHold(other: Rectangle): boolean {
    return this.width > other.width && this.height > other.height;
  }
}

const rect1 = new Rectangle(30, 50);
const rect2 = new Rectangle(10, 40);
const rect3 = new Rectangle(60, 45);

console.log(`Can rect1 hold rect2? ${rect1.canHold(rect2)}`);
console.log(`Can rect1 hold rect3? ${rect1.canHold(rect3)}`);
