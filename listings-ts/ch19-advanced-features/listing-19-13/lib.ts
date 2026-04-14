// 제네릭을 사용한 Iterator — 한 타입에 대해 여러 번 구현 가능
// Rust에서는 연관 타입을 사용하면 구현이 하나로 제한됨

interface Iterator<T> {
  next(): T | null;
}
