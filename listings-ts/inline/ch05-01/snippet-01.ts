// 참조자(&str) 대신 소유된 String을 쓰는 이유 —
// TS에서는 이 구분이 없으므로, 그냥 string을 사용합니다.
interface User {
  active: boolean;
  username: string; // &str → string (TS에는 소유권 개념 없음)
  email: string;
  sign_in_count: number;
}

const user1: User = {
  active: true,
  username: "someusername123",
  email: "someone@example.com",
  sign_in_count: 1,
};
