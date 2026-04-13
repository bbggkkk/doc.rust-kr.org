// Rust: Display 없이 OutlinePrint 구현 시도 (컴파일 에러)
// JavaScript에서는 컴파일 타임 제약이 없습니다

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // toString()이 없으면 outlinePrint에서 "[object Object]"가 표시됨
}

function outlinePrint(obj) {
  const display = obj.toString();
  const len = display.length;
  console.log("*".repeat(len + 4));
  console.log(`* ${" ".repeat(len)} *`);
  console.log(`* ${display} *`);
  console.log(`* ${" ".repeat(len)} *`);
  console.log("*".repeat(len + 4));
}

outlinePrint(new Point(1, 3));
