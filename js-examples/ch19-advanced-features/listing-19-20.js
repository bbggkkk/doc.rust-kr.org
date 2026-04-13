// Rust: Animal::baby_name()이 어떤 구현체인지 모호 (컴파일 에러)
// JavaScript에서는 동적 디스패치이므로 명시적으로 참조합니다

class Dog {
  static babyName() { return "Spot"; }
}

const AnimalForDog = {
  babyName() { return "puppy"; }
};

// JavaScript에서는 원하는 구현체를 직접 지정합니다
console.log(`A baby dog is called a ${AnimalForDog.babyName()}`);
