// Rust의 impl 블록 + &self → JS의 class 메서드 + this
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Rust: fn area(&self) → JS: area() (this가 self 역할)
  area() {
    return this.width * this.height;
  }
}

const rect1 = new Rectangle(30, 50);
console.log(
  `The area of the rectangle is ${rect1.area()} square pixels.`
);
