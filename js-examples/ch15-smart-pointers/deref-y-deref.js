// Rust의 *(y.deref()) 동작 설명
// Rust에서 *y는 내부적으로 *(y.deref())로 변환됩니다.
// JS에는 역참조 연산자가 없으므로 이 개념은 존재하지 않습니다.

// Rust:
//   let y = MyBox::new(5);
//   assert_eq!(5, *y);
//   // 실제로는: assert_eq!(5, *(y.deref()));

// JS에서 유사하게 표현하면:
class MyBox {
  constructor(value) {
    this._value = value;
  }
  deref() {
    return this._value;
  }
}

const y = new MyBox(5);
console.assert(y.deref() === 5); // 수동으로 deref() 호출
