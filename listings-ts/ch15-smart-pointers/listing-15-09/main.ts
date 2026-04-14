// JS에서는 자동 역참조(auto-deref)가 없으므로
// 래퍼 객체에서 값을 꺼내려면 명시적으로 접근해야 합니다.

class MyBox<T> {
  constructor(private inner: T) {}
  static new<T>(x: T): MyBox<T> { return new MyBox(x); }
  deref(): T { return this.inner; }
}

const x = 5;
const y = MyBox.new(x);

console.assert(5 === x);
// console.assert(5 === y);     // 오류! MyBox !== number
console.assert(5 === y.deref()); // 명시적으로 deref() 호출 필요
