// Rust: .expect("Failed to read line")
// Result 타입의 expect 메서드: 에러 시 메시지와 함께 프로그램 종료
// JS에서는 throw와 유사
try {
  // read_line 호출...
} catch (e) {
  throw new Error("Failed to read line");
}
