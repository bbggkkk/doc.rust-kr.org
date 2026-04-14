// Rust 완전 정규화 문법: <Dog as Animal>::baby_name()
// → Dog를 Animal로 취급하여 baby_name 호출
// TS에서는 타입 단언(as)과 유사한 개념

// Rust: <Dog as Animal>::baby_name()
// TS: Dog에 별도 메서드로 구현하여 명시적 호출
console.log(`A baby dog is called a ${Dog.babyNameAsAnimal()}`);
