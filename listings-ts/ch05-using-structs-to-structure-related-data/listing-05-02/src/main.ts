interface User {
  active: boolean;
  username: string;
  email: string;
  sign_in_count: number;
}

const user1: User = {
  active: true,
  username: "someusername123",
  email: "someone@example.com",
  sign_in_count: 1,
};
