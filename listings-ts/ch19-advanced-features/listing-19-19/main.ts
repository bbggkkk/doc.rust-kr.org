// 완전 정규화 문법 — 연관 함수(self 없는 정적 메서드)의 모호성 해소

interface Animal {
  // 정적 메서드는 인터페이스에 정의할 수 없으므로 개념적 표현
}

class Dog {
  // Dog에 직접 정의된 정적 메서드
  static babyName(): string {
    return "Spot";
  }

  // Animal 트레이트의 구현 — Rust: impl Animal for Dog
  static babyNameAsAnimal(): string {
    return "puppy";
  }
}

// Rust: Dog::baby_name() → Dog 자체의 연관 함수 호출
console.log(`A baby dog is called a ${Dog.babyName()}`);
