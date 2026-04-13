// Rust의 mut → JS에서는 let/const 구분 없이 객체 프로퍼티 변경 가능
const user1 = {
  active: true,
  username: "someusername123",
  email: "someone@example.com",
  signInCount: 1,
};

user1.email = "anotheremail@example.com"; // JS 객체는 기본적으로 가변
