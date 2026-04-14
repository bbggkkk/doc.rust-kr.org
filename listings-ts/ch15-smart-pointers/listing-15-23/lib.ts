// Rust의 RefCell<T>은 런타임에 대여 규칙을 검사합니다.
// 같은 스코프에서 두 개의 가변 참조를 만들면 panic!
// JS에서는 이런 제약이 없어 문제가 발생하지 않습니다.

interface Messenger {
  send(msg: string): void;
}

class MockMessenger implements Messenger {
  sentMessages: string[] = [];

  send(message: string): void {
    // Rust: borrow_mut()를 두 번 호출하면 런타임 패닉!
    // const oneBorrow = this.sentMessages.borrow_mut();
    // const twoBorrow = this.sentMessages.borrow_mut(); // 패닉!

    // JS에서는 같은 배열에 여러 번 접근해도 전혀 문제 없음
    this.sentMessages.push(message);
    this.sentMessages.push(message); // 그냥 동작함
  }
}
