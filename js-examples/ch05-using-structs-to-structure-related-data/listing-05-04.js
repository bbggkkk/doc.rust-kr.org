// Rust의 생성 함수 → JS의 팩토리 함수
function buildUser(email, username) {
  return {
    active: true,
    username: username,
    email: email,
    signInCount: 1,
  };
}
