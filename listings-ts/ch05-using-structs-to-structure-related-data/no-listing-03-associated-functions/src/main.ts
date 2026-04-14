class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  // 연관 함수 (Self 반환) → static 메서드
  static square(size: number): Rectangle {
    return new Rectangle(size, size);
  }
}
