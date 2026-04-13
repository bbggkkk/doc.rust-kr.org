// Rust의 필드 초기화 축약법 → JS의 단축 프로퍼티 (ES6 shorthand property)
function buildUser(email, username) {
  return {
    active: true,
    username,  // username: username 과 동일
    email,     // email: email 과 동일
    signInCount: 1,
  };
}
