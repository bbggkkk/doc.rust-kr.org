// RefCell: 같은 스코프에서 두 개의 가변 대여 → 런타임 패닉!
// JS에서는 이런 제한이 없음 (대여 규칙 자체가 없음)
class MockMessenger {
  // Rust: RefCell<Vec<String>>
  private _sentMessages: string[] = [];

  send(message: string): void {
    // Rust에서는 borrow_mut()를 두 번 호출하면 런타임 패닉!
    // const oneBorrow = this._sentMessages; // borrow_mut()
    // const twoBorrow = this._sentMessages; // borrow_mut() → 패닉!

    // JS에서는 같은 배열에 여러 참조를 가져도 문제없음
    const ref1 = this._sentMessages;
    const ref2 = this._sentMessages;
    ref1.push(message); // OK
    ref2.push(message); // OK - JS에는 대여 규칙이 없음
  }
}
