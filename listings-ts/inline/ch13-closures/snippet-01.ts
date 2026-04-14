// Rust: impl<T> Option<T> { pub fn unwrap_or_else<F>(self, f: F) -> T
//        where F: FnOnce() -> T
// FnOnce: 한 번만 호출될 수 있는 클로저 (캡처한 값의 소유권을 소비할 수 있음)
// FnMut: 여러 번 호출 가능, 캡처한 값을 변경할 수 있음
// Fn: 여러 번 호출 가능, 캡처한 값을 변경하지 않음

// TypeScript에서의 유사 구현:
function unwrapOrElse<T>(value: T | null | undefined, f: () => T): T {
  return value ?? f();
}

// 사용 예:
const result = unwrapOrElse(null, () => "default");
