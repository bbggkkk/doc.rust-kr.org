interface User {
  active: boolean;
  username: string;
  email: string;
  sign_in_count: number;
}

function build_user(email: string, username: string): User {
  return {
    active: true,
    username, // 필드 초기화 축약법 — JS/TS에서도 동일
    email,
    sign_in_count: 1,
  };
}
