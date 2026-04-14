// Rust의 mpsc::channel() → JS의 MessageChannel
// 채널은 스레드 간 데이터를 안전하게 전달하는 방법입니다.

// MessageChannel: 두 개의 포트(송신/수신)를 가진 채널
const { port1: tx, port2: rx } = new MessageChannel();
// Rust: let (tx, rx) = mpsc::channel();
// tx = 송신자 (transmitter), rx = 수신자 (receiver)
