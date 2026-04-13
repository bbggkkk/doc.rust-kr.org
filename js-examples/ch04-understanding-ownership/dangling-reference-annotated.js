// Rust: fn dangle() -> &String { let s = String::from("hello"); &s }
// Rust에서 s는 함수 종료 시 해제되므로, &s는 유효하지 않은 참조가 됩니다.
// JS에서는 가비지 컬렉터가 참조가 남아있는 한 메모리를 유지합니다.
function dangle() {
  const s = "hello"; // 함수 내에서 생성
  return s; // JS: 값이 반환되어 바깥에서 계속 사용 가능
}
// Rust는 이런 메모리 안전 문제를 컴파일 타임에 방지합니다.
