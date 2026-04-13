// Rust struct + 함수 → JS 객체 + 함수
// 구조체로 데이터에 이름을 붙여 의미를 부여
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rect1 = new Rectangle(30, 50);

// Rust의 &Rectangle (불변 참조) → JS에서는 그냥 객체를 전달
function area(rectangle) {
  return rectangle.width * rectangle.height;
}

console.log(
  `The area of the rectangle is ${area(rect1)} square pixels.`
);
