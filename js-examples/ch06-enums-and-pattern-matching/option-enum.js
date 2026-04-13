// Rust의 Option<T>는 값이 있거나(Some) 없음(None)을 타입으로 강제
// JS에서는 null/undefined가 이 역할을 하지만, 컴파일러가 검사해주지 않음
// → 핵심 차이: Rust는 None 처리를 강제하고, JS는 null 체크를 누락해도 에러 없이 실행됨

// JS의 nullable 값 (Option에 대응)
const someNumber = 5;          // Some(5)에 대응
const absentNumber = null;     // None에 대응

// 주의: JS에서는 null 체크 없이 값을 사용해도 컴파일 에러가 나지 않습니다
// Rust는 Option<T>를 반드시 처리하도록 강제하여 이런 버그를 방지합니다
