// 예제 19-16 ~ 19-18: 같은 이름의 메서드와 완전 정규화 문법
// JS에서는 동일 이름의 메서드 충돌이 발생하지 않습니다.
// 다만 믹스인이나 다중 상속 패턴에서 유사한 문제가 생길 수 있습니다.

// 트레이트를 믹스인으로 표현
const Pilot = {
  fly() {
    console.log("This is your captain speaking.");
  },
};

const Wizard = {
  fly() {
    console.log("Up!");
  },
};

class Human {
  fly() {
    console.log("*waving arms furiously*");
  }
}

const person = new Human();

// 기본 메서드 호출
person.fly(); // *waving arms furiously*

// 특정 트레이트의 메서드를 호출하려면 명시적으로 바인딩
Pilot.fly.call(person);  // This is your captain speaking.
Wizard.fly.call(person); // Up!
