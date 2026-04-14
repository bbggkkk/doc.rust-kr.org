// 목 객체 구현 시도 - Rust에서는 &self (불변 참조)로 내부 변경 불가
// JS/TS에서는 이런 제한이 없어 자연스럽게 동작함
interface Messenger {
  send(msg: string): void;
}

class MockMessenger implements Messenger {
  sentMessages: string[] = [];

  send(message: string): void {
    // JS에서는 문제없이 내부 상태 변경 가능
    // Rust에서는 &self가 불변이라 self.sent_messages.push() 불가!
    this.sentMessages.push(message);
  }
}

// 테스트
const mockMessenger = new MockMessenger();
// LimitTracker 사용 후...
console.assert(mockMessenger.sentMessages.length === 1);
