// Rust의 구조체 업데이트 문법 ..user1 → JS의 스프레드 연산자 ...user1
const user2 = {
  ...user1,                              // 나머지 필드를 user1에서 복사
  email: "another@example.com",          // email만 새 값으로 덮어쓰기
};
// 주의: JS 스프레드는 얕은 복사, Rust의 ..는 이동(move) 의미를 가짐
