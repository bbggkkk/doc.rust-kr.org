// unsafe 블록: Rust 컴파일러의 안전성 검사를 우회 (JS/TS에는 해당 개념 없음)
// 원시 포인터(*const T, *mut T)는 C의 포인터처럼 메모리 주소를 직접 다루는 것
// TS에는 원시 포인터 개념이 없으므로, 일반 변수 참조로 대체하여 표현합니다

let num = 5;

// Rust의 *const i32 → 불변 원시 포인터 (C의 const int* 와 유사)
const r1: Readonly<{ value: number }> = { value: num }; // *const i32에 대응
// Rust의 *mut i32 → 가변 원시 포인터 (C의 int* 와 유사)
const r2: { value: number } = { value: num }; // *mut i32에 대응
