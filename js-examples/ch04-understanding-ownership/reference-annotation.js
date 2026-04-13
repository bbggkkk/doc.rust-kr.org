// Rust: fn calculate_length(s: &String) -> usize { s.len() }
// JS에서는 타입 명시나 참조/값 구분이 없습니다.
function calculateLength(s) {  // s는 값으로 전달됨
  return s.length;
}                               // JS에서는 가비지 컬렉터가 메모리 관리
