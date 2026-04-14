// RefCell<T>: 내부 가변성 패턴 - 불변 참조를 통해 내부 값 변경 가능
// JS에서는 객체가 기본적으로 내부 가변성을 가짐 (RefCell 불필요)
interface Messenger {
  send(msg: string): void;
}

class MockMessenger implements Messenger {
  // Rust: RefCell<Vec<String>> → JS에서는 그냥 배열 사용
  // RefCell은 런타임에 대여 규칙을 검사하지만, JS에는 대여 규칙이 없음
  sentMessages: string[] = [];

  send(message: string): void {
    // Rust: self.sent_messages.borrow_mut().push(...)
    // JS: 그냥 push (내부 가변성이 기본)
    this.sentMessages.push(message);
  }
}

// 테스트
const mockMessenger = new MockMessenger();
// LimitTracker 사용 후...
// Rust: mock_messenger.sent_messages.borrow().len()
// JS: mockMessenger.sentMessages.length
console.assert(mockMessenger.sentMessages.length === 1);
