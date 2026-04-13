// Rust의 복수 생산자(mpsc) → JS의 여러 비동기 소스를 하나로 합치기

const { EventEmitter } = require("events");

const channel = new EventEmitter();

// 생산자 1
const producer1 = async () => {
  const vals = ["hi", "from", "the", "thread"];
  for (const val of vals) {
    await new Promise((r) => setTimeout(r, 1000));
    channel.emit("message", val);
  }
};

// 생산자 2
const producer2 = async () => {
  const vals = ["more", "messages", "for", "you"];
  for (const val of vals) {
    await new Promise((r) => setTimeout(r, 1000));
    channel.emit("message", val);
  }
};

// 수신자
channel.on("message", (received) => {
  console.log(`Got: ${received}`);
});

producer1();
producer2();
