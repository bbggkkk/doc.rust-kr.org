// Rust: 완전 정규화 문법 <Dog as Animal>::baby_name()
// JavaScript에서는 명시적으로 원하는 구현체를 참조합니다

class Dog {
  static babyName() { return "Spot"; }
}

const AnimalForDog = {
  babyName() { return "puppy"; }
};

// Rust의 <Dog as Animal>::baby_name()에 해당
console.log(`A baby dog is called a ${AnimalForDog.babyName()}`);
