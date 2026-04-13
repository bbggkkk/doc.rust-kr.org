// JavaScript에서는 참조자의 유효성(라이프타임)을 신경 쓸 필요가 없습니다
// Rust에서는 이 코드가 라이프타임 없이는 컴파일되지 않습니다

const user1 = {
  active: true,
  username: "someusername123", // JavaScript의 문자열은 항상 값으로 복사됩니다
  email: "someone@example.com",
  signInCount: 1,
};

// JavaScript에는 소유권이나 라이프타임 개념이 없으므로
// 위 코드는 아무 문제 없이 동작합니다.
// Rust에서는 &str 대신 String을 사용하거나
// 라이프타임을 명시해야 합니다.
