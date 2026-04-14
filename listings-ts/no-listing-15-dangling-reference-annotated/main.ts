// Rust: fn dangle() -> &String → 컴파일 에러!
function dangle(): string {
    const s = "hello"; // Rust: let s = String::from("hello") - 새 String 생성

    return s;          // Rust: &s를 반환 → 에러! s는 함수 끝에서 해제됩니다
} // Rust: s가 스코프를 벗어나고 메모리가 해제됩니다 → 댕글링 참조 발생!
  // JS: GC가 참조 카운트를 추적하므로 s가 반환되면 메모리가 유지됩니다
