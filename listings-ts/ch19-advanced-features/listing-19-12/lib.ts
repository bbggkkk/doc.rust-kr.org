// Rust의 연관 타입(associated type) → TS의 제네릭 인터페이스로 표현
// 연관 타입은 구현체가 타입을 한 번만 지정하면 되는 것이 특징

interface Iterator<Item> {
  next(): Item | null; // Option<Self::Item> → Item | null
}
