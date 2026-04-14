// Deref 미구현 시 역참조 불가 - JS에서는 valueOf 없이 자동 변환 안 됨
const x = 5;
const y = MyBox.new(x);

console.assert(5 === x);
// console.assert(5 === y); // 에러! MyBox 객체와 숫자를 직접 비교 불가
// Rust에서 Deref 트레이트 없이 *y를 쓸 수 없는 것과 같음

class MyBox<T> {
  constructor(private value: T) {}
  static new<T>(x: T): MyBox<T> {
    return new MyBox(x);
  }
}
