interface User {
  active: boolean;
  username: string;
  email: string;
  sign_in_count: number;
}

function build_user(email: string, username: string): User {
  return {
    active: true,
    username: username,
    email: email,
    sign_in_count: 1,
  };
}
