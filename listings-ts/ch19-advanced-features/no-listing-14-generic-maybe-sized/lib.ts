// Rust: fn generic<T: ?Sized>(t: &T) — T가 Sized가 아닐 수도 있음
// ?Sized이면 반드시 참조(&T)로 받아야 함
// TS에서는 모든 타입이 참조로 전달되므로 이런 구분이 없음

function generic<T>(t: T): void {
  // TS에서는 ?Sized 같은 제약이 불필요
  // --생략--
}
