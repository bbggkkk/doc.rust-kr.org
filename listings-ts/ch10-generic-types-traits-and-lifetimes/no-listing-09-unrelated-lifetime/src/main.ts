// Rust에서는 함수 내부에서 생성된 값의 참조자를 반환할 수 없음
// (댕글링 참조 방지)
// TS/JS에서는 GC가 있어서 이런 문제가 발생하지 않음

// 이 코드는 Rust에서 컴파일 에러 — TS에서는 문제없음
function longest(x: string, y: string): string {
    const result = "really long string";
    return result; // Rust: 함수 내부 값의 참조를 반환 불가 → 소유권을 반환해야 함
}
