// Rust의 채널을 통한 메시지 전송 → JS의 MessageChannel / Worker

// MessageChannel로 채널 생성
const { port1: tx, port2: rx } = new MessageChannel();

// 생성된 "스레드"에서 메시지 전송
// Rust: thread::spawn(move || { tx.send(val).unwrap(); })
setTimeout(() => {
  const val = "hi";
  tx.postMessage(val); // tx.send(val)
}, 0);
