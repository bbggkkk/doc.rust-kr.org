// Rectangle 클래스와 canHold 메서드
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  canHold(other) {
    return this.width > other.width && this.height > other.height;
  }
}

module.exports = { Rectangle };
