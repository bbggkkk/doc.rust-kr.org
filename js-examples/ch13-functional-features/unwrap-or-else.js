// Rust의 Option<T>와 unwrap_or_else
// JS에서는 ?? (nullish coalescing) 또는 || 연산자로 유사하게 구현

// Rust: impl<T> Option<T> { fn unwrap_or_else<F>(self, f: F) -> T ... }
// JS에서 유사한 패턴:

function unwrapOrElse(option, fallbackFn) {
  if (option !== null && option !== undefined) {
    return option;
  }
  return fallbackFn();
}

const someValue = unwrapOrElse("hello", () => "default");
console.log(someValue); // "hello"

const noneValue = unwrapOrElse(null, () => "default");
console.log(noneValue); // "default"

// 더 관용적인 JS 방식:
const result = null ?? (() => "default")();
