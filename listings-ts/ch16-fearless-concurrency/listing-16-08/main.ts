// Rust의 rx.recv() → JS의 onmessage 이벤트 리스너
// recv()는 메시지가 올 때까지 블록하지만,
// JS는 이벤트 기반이므로 콜백으로 처리합니다.

const { port1: tx, port2: rx } = new MessageChannel();

// 생성된 "스레드"에서 메시지 전송
setTimeout(() => {
  const val = "hi";
  tx.postMessage(val);
}, 0);

// 수신자에서 메시지 받기
// Rust: let received = rx.recv().unwrap();
rx.onmessage = (event) => {
  const received = event.data;
  console.log(`Got: ${received}`);
};
rx.start();
