// 역참조 강제 변환 없이 수동으로 변환하기
// Rust: hello(&(*m)[..]) — 역참조 강제 변환이 없었다면 이렇게 작성
// JS에서도 수동 변환이 더 장황합니다.

function hello(name) {
  console.log(`Hello, ${name}!`);
}

class MyBox {
  constructor(value) {
    this._value = value;
  }
}

const m = new MyBox("Rust");

// 역참조 강제 변환이 없으면 수동으로 꺼내야 합니다
hello(m._value); // 명시적으로 내부 값 접근
