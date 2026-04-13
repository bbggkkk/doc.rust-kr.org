// Rust의 채널 수신 → JS의 Promise 기반 메시지 수신

function createChannel() {
  let resolve;
  const promise = new Promise((r) => (resolve = r));
  return {
    tx: { send: (val) => resolve(val) },
    rx: { recv: () => promise },
  };
}

async function main() {
  const { tx, rx } = createChannel();

  // 비동기로 메시지 전송
  setTimeout(() => {
    const val = "hi";
    tx.send(val);
  }, 0);

  // 메시지 수신 대기 (Rust의 rx.recv()에 해당)
  const received = await rx.recv();
  console.log(`Got: ${received}`);
}

main();
