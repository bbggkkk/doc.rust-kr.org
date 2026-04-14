class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // 필드와 동일한 이름의 메서드 (getter)
  hasWidth(): boolean {
    return this.width > 0;
  }
}

const rect1 = new Rectangle(30, 50);

// TS에서는 필드와 메서드 이름이 같을 수 없으므로 다른 이름 사용
if (rect1.hasWidth()) {
  console.log(`The rectangle has a nonzero width; it is ${rect1.width}`);
}
