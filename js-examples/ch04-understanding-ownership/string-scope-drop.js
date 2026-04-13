// Rust: 스코프를 벗어나면 자동으로 drop이 호출됨
{
  const s = "hello"; // String::from("hello")
  // s를 사용
} // 스코프 종료 - Rust는 여기서 메모리를 자동 해제
// JS에서는 가비지 컬렉터가 더 이상 참조되지 않는 메모리를 수거합니다.
