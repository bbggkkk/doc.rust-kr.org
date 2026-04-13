// RefCell<T>: 내부 가변성 패턴
// JS에는 이 개념이 필요 없습니다.
// JS 객체는 기본적으로 항상 가변이기 때문입니다.

// Rust에서 RefCell<T>이 필요한 이유:
// - 불변 참조자를 통해서도 내부 값을 변경해야 할 때
// - 대여 규칙을 런타임에 검사
//
// JS에서는 const로 선언해도 객체 내부는 변경 가능합니다:
const obj = { value: 5 };
obj.value = 10; // OK — const는 재할당만 막음, 내부 수정은 허용

// 목 객체(mock object) 예시 — JS에서는 자연스럽게 가능
class MockMessenger {
  constructor() {
    this.sentMessages = [];
  }

  send(message) {
    // Rust에서는 &self (불변)로 받으므로 RefCell이 필요하지만,
    // JS에서는 this를 자유롭게 변경할 수 있습니다.
    this.sentMessages.push(message);
  }
}

const mock = new MockMessenger();
mock.send("warning: 75% of quota used");
console.assert(mock.sentMessages.length === 1);

// 불변성이 정말 필요하다면 Object.freeze를 사용합니다:
const frozen = Object.freeze({ value: 5 });
// frozen.value = 10; // TypeError in strict mode, 무시 in non-strict
