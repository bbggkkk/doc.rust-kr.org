// RefCell<T> 이중 가변 대여 — 런타임 패닉
// Rust에서는 같은 스코프에서 두 개의 가변 참조를 만들면 패닉이 발생합니다.
// JS에서는 이런 제약이 없습니다.

// Rust:
//   let one_borrow = self.sent_messages.borrow_mut();
//   let two_borrow = self.sent_messages.borrow_mut(); // 패닉!

// JS에서 유사한 보호를 구현하려면:
class RefCell {
  #value;
  #borrowedMut = false;

  constructor(value) {
    this.#value = value;
  }

  borrowMut() {
    if (this.#borrowedMut) {
      throw new Error("already borrowed: BorrowMutError");
    }
    this.#borrowedMut = true;
    return {
      value: this.#value,
      release: () => { this.#borrowedMut = false; },
    };
  }
}

const cell = new RefCell([]);
const borrow1 = cell.borrowMut();
try {
  const borrow2 = cell.borrowMut(); // Error!
} catch (e) {
  console.log(e.message); // "already borrowed: BorrowMutError"
}
