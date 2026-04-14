// JS에서는 내부 가변성(interior mutability) 문제가 없습니다.
// 객체의 프로퍼티는 언제든 변경 가능합니다.
// Rust에서는 &self로 받은 불변 참조에서 내부 값을 변경할 수 없지만,
// JS에서는 이런 제약이 없어 RefCell이 불필요합니다.

interface Messenger {
  send(msg: string): void;
}

class MockMessenger implements Messenger {
  sentMessages: string[] = []; // JS에서는 그냥 변경 가능

  send(message: string): void {
    // Rust: &self에서는 self.sent_messages.push() 불가
    // JS: 아무 제약 없이 push 가능
    this.sentMessages.push(message);
  }
}

// 테스트
const mockMessenger = new MockMessenger();
// LimitTracker 사용...
console.assert(mockMessenger.sentMessages.length === 1);
