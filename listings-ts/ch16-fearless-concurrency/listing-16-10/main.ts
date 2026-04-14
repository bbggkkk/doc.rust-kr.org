// 여러 메시지를 순차적으로 전송하고 수신하기
// Rust의 for received in rx → JS의 onmessage 이벤트

const { port1: tx, port2: rx } = new MessageChannel();

// 생성된 "스레드"에서 여러 메시지 전송
const vals = ["hi", "from", "the", "thread"];
let i = 0;
const interval = setInterval(() => {
  if (i < vals.length) {
    tx.postMessage(vals[i]);
    i++;
  } else {
    clearInterval(interval);
    tx.close(); // 채널 닫기
  }
}, 1000);

// Rust: for received in rx { ... }
// JS: onmessage 이벤트로 수신
rx.onmessage = (event) => {
  console.log(`Got: ${event.data}`);
};
rx.start();
