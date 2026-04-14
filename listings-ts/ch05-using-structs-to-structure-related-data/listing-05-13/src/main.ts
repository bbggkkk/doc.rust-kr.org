// impl → class 메서드로 표현
class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // &self → this
  area(): number {
    return this.width * this.height;
  }
}

const rect1 = new Rectangle(30, 50);

console.log(
  `The area of the rectangle is ${rect1.area()} square pixels.`
);
