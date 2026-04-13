// Rust: 같은 이름의 연관 함수가 있는 트레이트와 타입
// JavaScript에서는 정적 메서드로 표현합니다

class Dog {
  static babyName() {
    return "Spot";
  }
}

const AnimalForDog = {
  babyName() {
    return "puppy";
  }
};

console.log(`A baby dog is called a ${Dog.babyName()}`);
