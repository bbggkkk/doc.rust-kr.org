// JavaScript에서는 객체를 바로 출력할 수 있습니다
// Rust에서는 Display나 Debug 트레이트가 구현되어야 합니다

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rect1 = new Rectangle(30, 50);

// JavaScript에서는 기본적으로 객체를 출력할 수 있습니다
console.log(`rect1 is ${JSON.stringify(rect1)}`);
// 또는 console.log("rect1 is", rect1);
