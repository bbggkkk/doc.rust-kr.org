interface User {
  active: boolean;
  username: string;
  email: string;
  sign_in_count: number;
}

// --생략-- (user1 생성)

const user1: User = {
  email: "someone@example.com",
  username: "someusername123",
  active: true,
  sign_in_count: 1,
};

// 구조체 업데이트 문법 → 스프레드 연산자
const user2: User = {
  ...user1,
  email: "another@example.com",
};
