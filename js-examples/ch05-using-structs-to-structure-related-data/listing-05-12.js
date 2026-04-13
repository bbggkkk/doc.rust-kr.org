// JavaScript에서는 Debug 트레이트 같은 것을 별도로 구현할 필요 없이
// 객체를 바로 출력할 수 있습니다

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rect1 = new Rectangle(30, 50);

// console.log가 자동으로 객체의 내용을 보여줍니다
console.log("rect1 is", rect1);
// 출력: rect1 is Rectangle { width: 30, height: 50 }
