// Rust: 별도의 스코프에서 가변 참조자 만들기
const s = { value: "hello" };
{
  const r1 = s;
  r1.value = "world";
} // r1의 스코프 종료
const r2 = s;
// JS에서는 스코프와 관계없이 참조가 자유롭습니다.
