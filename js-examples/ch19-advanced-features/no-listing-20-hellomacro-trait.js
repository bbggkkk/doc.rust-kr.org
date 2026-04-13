// Rust: HelloMacro 트레이트 정의
// JavaScript에서는 프로토타입이나 심볼로 인터페이스를 정의합니다

const HelloMacro = {
  helloMacro(instance) {
    console.log(`Hello, Macro! My name is ${instance.constructor.name}!`);
  }
};

module.exports = { HelloMacro };
