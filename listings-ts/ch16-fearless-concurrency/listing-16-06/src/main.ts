// mpsc::channel() → JS의 MessageChannel 또는 EventEmitter 패턴
// Rust 채널: 복수 생산자, 단일 소비자 (mpsc)
const { port1: tx, port2: rx } = new MessageChannel();
// tx: 송신자 (transmitter), rx: 수신자 (receiver)
