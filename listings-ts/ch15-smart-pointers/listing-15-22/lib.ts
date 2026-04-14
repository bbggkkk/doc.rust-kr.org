// JS에서는 RefCell이 불필요합니다.
// Rust에서 RefCell<T>은 런타임에 대여 규칙을 검사하지만,
// JS에서는 객체 프로퍼티를 언제든 자유롭게 변경할 수 있습니다.

interface Messenger {
  send(msg: string): void;
}

class MockMessenger implements Messenger {
  // Rust: RefCell<Vec<String>> → JS: 그냥 배열
  sentMessages: string[] = [];

  send(message: string): void {
    // Rust: self.sent_messages.borrow_mut().push(...)
    // JS: 그냥 push - 내부 가변성 제약 없음
    this.sentMessages.push(message);
  }
}

// 테스트
const mockMessenger = new MockMessenger();
// LimitTracker 사용 후...
console.assert(mockMessenger.sentMessages.length === 1);
