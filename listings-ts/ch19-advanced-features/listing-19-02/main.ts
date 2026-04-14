// unsafe 블록: Rust 컴파일러의 안전성 검사를 우회 (JS/TS에는 해당 개념 없음)
// 임의 메모리 주소를 가리키는 원시 포인터 — TS에서는 이런 저수준 연산이 불가능

const address = 0x012345;
// Rust: let r = address as *const i32;
// TS에서는 임의 메모리 주소 접근이 불가능 (안전한 런타임 환경)
const r = address; // 개념적 표현일 뿐, 실제 포인터 역참조 불가
