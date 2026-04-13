// 비재귀적 타입의 크기 계산 — JS에 없는 개념
// Rust는 열거형의 각 배리언트 중 가장 큰 것으로 크기를 결정합니다.
// JS에서는 메모리 레이아웃을 신경 쓸 필요가 없습니다.

// Rust의 Message 열거형을 JS 클래스로 표현
class Message {
  static Quit() { return { type: "Quit" }; }
  static Move(x, y) { return { type: "Move", x, y }; }
  static Write(text) { return { type: "Write", text }; }
  static ChangeColor(r, g, b) { return { type: "ChangeColor", r, g, b }; }
}

// JS에서는 객체 크기가 동적이므로
// Rust처럼 "가장 큰 배리언트의 크기"를 고려할 필요가 없습니다.
