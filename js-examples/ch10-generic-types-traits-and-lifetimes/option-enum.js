// Rust의 Option<T>는 값이 있거나 없을 수 있음을 표현합니다
// JS에서는 null/undefined가 이 역할을 합니다
const some = 5;       // Some(5)에 해당
const none = null;    // None에 해당

// TypeScript라면 제네릭으로 표현할 수 있습니다:
// type Option<T> = T | null;
