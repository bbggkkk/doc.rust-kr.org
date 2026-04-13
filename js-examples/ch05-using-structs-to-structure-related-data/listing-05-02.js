// Rust 구조체 인스턴스 생성 → JS 객체 리터럴 또는 new
const user1 = new User(true, "someusername123", "someone@example.com", 1);

// 또는 객체 리터럴로 표현
const user1 = {
  active: true,
  username: "someusername123",
  email: "someone@example.com",
  signInCount: 1,
};
