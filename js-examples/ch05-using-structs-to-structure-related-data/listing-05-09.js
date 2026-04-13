// Rust의 튜플 → JS의 배열로 표현
const rect1 = [30, 50];

function area(dimensions) {
  return dimensions[0] * dimensions[1]; // 인덱스로 접근
}

console.log(
  `The area of the rectangle is ${area(rect1)} square pixels.`
);
