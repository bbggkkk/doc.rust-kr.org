// Rust의 unwrap: Option<T>에서 값을 꺼내거나 panic
// panic!은 ! (never) 타입 → match에서 T 타입으로 추론 가능

function unwrap<T>(option: T | null): T {
  if (option !== null) {
    return option;           // T 타입
  } else {
    // Rust: panic!() → ! (never) 타입
    throw new Error("called unwrap on a null value"); // never를 반환
  }
}
