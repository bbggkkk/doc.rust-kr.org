// 역참조 강제 변환 — 자동 타입 변환
// Rust: &MyBox<String> → &String → &str (자동 변환)
// JS에는 이 개념이 없지만, 암묵적 형변환이 일부 유사합니다.

function hello(name) {
  console.log(`Hello, ${name}!`);
}

// Rust에서는 역참조 강제 변환으로 &MyBox<String>을 &str로 자동 변환
// JS에서는 toString()으로 암묵적 문자열 변환이 일어남

class MyBox {
  constructor(value) {
    this._value = value;
  }
  toString() {
    return this._value;
  }
}

const m = new MyBox("Rust");
hello(m); // "Hello, Rust!" — toString()으로 자동 변환
