// Rust: #[derive(HelloMacro)]를 사용한 절차적 매크로 예제
// JavaScript에는 derive 매크로에 해당하는 직접적인 기능이 없습니다.
// 데코레이터나 메타프로그래밍으로 유사하게 구현할 수 있습니다.

function HelloMacro(target) {
  target.prototype.helloMacro = function () {
    console.log(`Hello, Macro! My name is ${target.name}!`);
  };
  return target;
}

// 데코레이터 문법 대신 수동 적용
class Pancakes {}
HelloMacro(Pancakes);

const p = new Pancakes();
p.helloMacro(); // Hello, Macro! My name is Pancakes!
