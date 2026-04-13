// 예제 5-6: 구조체 업데이트 문법 없이 user1의 값으로 user2 생성하기

const user1 = {
  email: "someone@example.com",
  username: "someusername123",
  active: true,
  signInCount: 1,
};

// JavaScript에서는 각 필드를 수동으로 복사해야 합니다
const user2 = {
  active: user1.active,
  username: user1.username,
  email: "another@example.com",
  signInCount: user1.signInCount,
};
