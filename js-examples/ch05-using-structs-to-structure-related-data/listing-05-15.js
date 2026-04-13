class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  // Rust: fn can_hold(&self, other: &Rectangle) → JS: canHold(other)
  // &self → this, &Rectangle → other (JS에는 참조/소유권 구분 없음)
  canHold(other) {
    return this.width > other.width && this.height > other.height;
  }
}
