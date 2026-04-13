// 열거형 배리언트와 동일한 데이터를 가진 별도의 구조체들

class QuitMessage {} // 유사 유닛 구조체

class MoveMessage {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class WriteMessage {
  constructor(message) {
    this.message = message;
  }
}

class ChangeColorMessage {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

// JavaScript에서는 이 각각의 클래스를 하나의 타입으로 묶기 어렵습니다
// Rust의 열거형은 이들을 하나의 Message 타입으로 통합할 수 있습니다
