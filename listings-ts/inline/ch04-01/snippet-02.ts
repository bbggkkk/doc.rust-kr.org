// Rust: let s = String::from("hello");
// String::from은 힙에 메모리를 할당합니다
// JS에서는 모든 문자열이 엔진 내부에서 관리되지만,
// Rust에서는 String(힙 할당, 가변)과 &str(불변 참조)을 구분합니다
const s = "hello"; // JS에서는 단순히 문자열을 할당합니다
