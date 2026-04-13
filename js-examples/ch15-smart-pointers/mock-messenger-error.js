// MockMessenger에서 불변 참조로 값 변경 시도 — Rust에서는 에러
// Rust에서는 &self로 받은 메서드에서 필드를 변경할 수 없습니다.
// JS에서는 이런 제약이 없어 자유롭게 변경 가능합니다.

class MockMessenger {
  constructor() {
    this.sentMessages = [];
  }

  send(message) {
    // Rust에서는 &self (불변)로 받으므로 sent_messages를 변경할 수 없어
    // 컴파일 에러가 발생합니다.
    // JS에서는 아무 문제 없이 동작합니다.
    this.sentMessages.push(message);
  }
}

const mock = new MockMessenger();
mock.send("urgent: over 100%!");
console.assert(mock.sentMessages.length === 1); // OK
