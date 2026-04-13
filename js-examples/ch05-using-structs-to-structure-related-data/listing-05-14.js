// 예제 5-14: can_hold 메서드를 사용하는 코드

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  canHold(other) {
    return this.width > other.width && this.height > other.height;
  }
}

const rect1 = new Rectangle(30, 50);
const rect2 = new Rectangle(10, 40);
const rect3 = new Rectangle(60, 45);

console.log(`Can rect1 hold rect2? ${rect1.canHold(rect2)}`);
console.log(`Can rect1 hold rect3? ${rect1.canHold(rect3)}`);
