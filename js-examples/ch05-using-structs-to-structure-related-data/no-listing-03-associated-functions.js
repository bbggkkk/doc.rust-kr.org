class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Rust의 연관 함수 (self 없음) → JS의 static 메서드
  // Rectangle::square(3) → Rectangle.square(3)
  static square(size) {
    return new Rectangle(size, size);
  }
}

const sq = Rectangle.square(3);
