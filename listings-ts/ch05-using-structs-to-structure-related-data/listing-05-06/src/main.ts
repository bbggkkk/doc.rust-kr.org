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

const user2: User = {
  active: user1.active,
  username: user1.username,
  email: "another@example.com",
  sign_in_count: user1.sign_in_count,
};
