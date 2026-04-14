// Rust Iterator 트레이트 → JS Iterator/Iterable 프로토콜
//
// Rust:
//   pub trait Iterator {
//       type Item;
//       fn next(&mut self) -> Option<Self::Item>;
//   }
//
// TypeScript:
interface RustLikeIterator<T> {
  next(): { value: T; done: false } | { value: undefined; done: true };
}

// JS의 이터러블 프로토콜:
// interface Iterable<T> {
//   [Symbol.iterator](): Iterator<T>;
// }
