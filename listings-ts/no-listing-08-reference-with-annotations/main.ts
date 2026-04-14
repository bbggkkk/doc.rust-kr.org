// Rust: fn calculate_length(s: &String) -> usize
// s는 String의 참조자입니다 (빌려온 값)
function calculateLength(s: string): number { // JS: 항상 참조로 전달
    return s.length;
} // Rust: s는 참조자이므로 소유권이 없어서, 여기서 원본이 해제되지 않습니다
  // JS: 함수가 끝나도 원본 문자열은 GC가 관리합니다
