// Rust: 참조자 대신 String을 직접 반환하면 소유권이 이동됩니다
function noDangle(): string {
    const s = "hello"; // Rust: let s = String::from("hello")
    return s;          // Rust: 소유권이 호출자에게 이동됩니다 (참조가 아닌 값 반환)
}
// JS에서는 참조든 값이든 GC가 관리하므로 이런 구분이 필요 없습니다
