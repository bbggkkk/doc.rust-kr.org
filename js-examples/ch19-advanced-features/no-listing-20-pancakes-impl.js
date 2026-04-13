// Rust: Pancakes에 HelloMacro 트레이트 수동 구현
// JavaScript에서는 클래스에 메서드를 직접 추가합니다

class Pancakes {
  helloMacro() {
    console.log(`Hello, Macro! My name is ${this.constructor.name}!`);
  }
}

const p = new Pancakes();
p.helloMacro(); // Hello, Macro! My name is Pancakes!
