interface User {
  active: boolean;
  username: string;
  email: string;
  sign_in_count: number;
}

let user1: User = {
  active: true,
  username: "someusername123",
  email: "someone@example.com",
  sign_in_count: 1,
};

user1.email = "anotheremail@example.com";
