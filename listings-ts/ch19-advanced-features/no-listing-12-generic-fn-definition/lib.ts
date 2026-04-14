// Rust: fn generic<T>(t: T) { ... }
// 모든 제네릭 타입은 기본적으로 Sized 바운드를 가짐
// TS: 모든 타입이 런타임에 크기가 결정되므로 이런 제한이 없음

function generic<T>(t: T): void {
  // --생략--
}
