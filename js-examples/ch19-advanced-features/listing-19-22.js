// 예제 19-22: 슈퍼트레이트 - Display를 요구하는 OutlinePrint
// JS에서는 toString() 메서드가 Display의 역할을 합니다.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Display 트레이트에 해당
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

// OutlinePrint 기능을 믹스인으로 구현
function outlinePrint(obj) {
  const display = obj.toString();
  const len = display.length;
  const border = "*".repeat(len + 4);

  console.log(border);
  console.log(`*${" ".repeat(len + 2)}*`);
  console.log(`* ${display} *`);
  console.log(`*${" ".repeat(len + 2)}*`);
  console.log(border);
}

outlinePrint(new Point(1, 3));
