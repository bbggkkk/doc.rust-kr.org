// Rust의 dbg! 매크로와 유사한 JavaScript 디버깅

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const scale = 2;

// JavaScript에서는 console.debug를 사용하여 디버그 출력을 할 수 있습니다
const rect1 = new Rectangle(
  console.debug("30 * scale =", 30 * scale) || 30 * scale,
  50,
);

// Rust의 dbg!처럼 파일명과 라인 번호는 자동으로 표시되지 않지만
// console.debug는 stderr(콘솔)에 출력합니다
console.debug("rect1 =", rect1);
