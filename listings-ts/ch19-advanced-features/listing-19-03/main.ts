// unsafe 블록: Rust 컴파일러의 안전성 검사를 우회 (JS/TS에는 해당 개념 없음)
// 원시 포인터 역참조 — TS에는 직접적인 대응 개념 없음

let num = 5;

const r1 = { value: num }; // *const i32 역할
const r2 = { value: num }; // *mut i32 역할

// Rust에서는 unsafe 블록 안에서만 원시 포인터를 역참조할 수 있음
// TS에서는 그냥 값을 읽으면 됨 (메모리 안전성이 런타임에 보장됨)
console.log(`r1 is: ${r1.value}`);
console.log(`r2 is: ${r2.value}`);
