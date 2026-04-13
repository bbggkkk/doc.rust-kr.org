// Rust: Human 인스턴스에서 fly 호출
// JavaScript에서는 프로토타입 체인에서 가장 가까운 메서드가 호출됩니다

class Human {
  fly() {
    console.log("*waving arms furiously*");
  }
}

const person = new Human();
person.fly(); // *waving arms furiously*
