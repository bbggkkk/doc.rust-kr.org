// Rust의 mpsc::channel() → JS의 MessageChannel (또는 EventEmitter 패턴)

const { MessageChannel } = require("worker_threads") || globalThis;

// 간단한 이벤트 기반 채널 구현
function createChannel() {
  const listeners = [];
  return {
    tx: {
      send(val) {
        listeners.forEach((fn) => fn(val));
      },
    },
    rx: {
      onMessage(fn) {
        listeners.push(fn);
      },
    },
  };
}

const { tx, rx } = createChannel();

// 수신 측 설정
rx.onMessage((val) => {
  console.log(`Got: ${val}`);
});

// 송신
tx.send("hi");
