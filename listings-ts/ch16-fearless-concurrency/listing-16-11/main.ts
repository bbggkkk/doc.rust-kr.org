// Rust의 mpsc(복수 생산자, 단일 소비자) → JS의 여러 Worker
// 송신자를 clone하여 여러 스레드에서 같은 채널로 전송합니다.

const { port1, port2: rx } = new MessageChannel();

// 첫 번째 생산자 (tx1 = tx.clone())
const vals1 = ["hi", "from", "the", "thread"];
let i1 = 0;
const interval1 = setInterval(() => {
  if (i1 < vals1.length) {
    port1.postMessage(vals1[i1++]);
  } else clearInterval(interval1);
}, 1000);

// 두 번째 생산자 (원본 tx)
// JS에서는 같은 포트에서 여러 곳이 postMessage 가능
const vals2 = ["more", "messages", "for", "you"];
let i2 = 0;
const interval2 = setInterval(() => {
  if (i2 < vals2.length) {
    port1.postMessage(vals2[i2++]);
  } else clearInterval(interval2);
}, 1000);

// 단일 소비자
rx.onmessage = (event) => {
  console.log(`Got: ${event.data}`);
};
rx.start();
