// MyBox에 Deref 구현하기 — 역참조 가능하게 만들기
// JS에서는 Proxy나 valueOf로 유사한 동작을 구현할 수 있습니다.

class MyBox {
  constructor(value) {
    this._value = value;
  }

  // Rust의 deref() 메서드에 해당
  deref() {
    return this._value;
  }

  // JS에서 암묵적 변환을 위한 메서드
  valueOf() {
    return this._value;
  }

  toString() {
    return String(this._value);
  }
}

const y = new MyBox(5);
console.assert(y.deref() === 5); // Rust: *(y.deref())에 해당
console.assert(y == 5); // valueOf()로 자동 변환 (==만 가능)
