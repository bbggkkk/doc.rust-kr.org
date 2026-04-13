// Rust: 트레이트 이름을 지정하여 특정 fly 메서드 호출
// JavaScript에서는 명시적으로 함수를 참조합니다

const Pilot = {
  fly() { console.log("This is your captain speaking."); }
};

const Wizard = {
  fly() { console.log("Up!"); }
};

class Human {
  fly() { console.log("*waving arms furiously*"); }
}

const person = new Human();
Pilot.fly.call(person);
Wizard.fly.call(person);
person.fly();
