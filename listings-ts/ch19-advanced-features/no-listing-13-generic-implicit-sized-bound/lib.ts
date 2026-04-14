// Rust: fn generic<T: Sized>(t: T) — 암묵적으로 추가되는 Sized 바운드
// TS에서는 모든 타입이 런타임에 크기가 결정되므로 Sized 개념이 불필요

function generic<T>(t: T): void {
  // T는 암묵적으로 크기가 정해진 타입 (TS에서는 항상 그러함)
  // --생략--
}
