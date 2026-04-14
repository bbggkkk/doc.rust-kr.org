// Rust의 Rc<T>는 스레드 안전하지 않습니다 (Send 트레이트 미구현).
// JS에서는 일반 객체를 Worker 간 공유할 수 없고,
// SharedArrayBuffer만 공유 가능합니다.

// Rust: Rc<Mutex<i32>> → 컴파일 에러! (스레드 간 전송 불가)
// JS: 일반 객체는 Worker 간 공유 불가 → SharedArrayBuffer 필요

const shared = new SharedArrayBuffer(4);
const counter = new Int32Array(shared);
// SharedArrayBuffer는 스레드 간 안전하게 공유 가능
// (Rust의 Arc와 유사한 역할)
