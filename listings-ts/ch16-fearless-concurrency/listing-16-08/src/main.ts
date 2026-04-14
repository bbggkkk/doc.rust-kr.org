// 채널에서 메시지 수신
// Rust: rx.recv() (블로킹) → JS: await (비동기 대기)
const createChannel = <T>() => {
  let resolver: ((value: T) => void) | null = null;
  return {
    tx: { send(val: T) { if (resolver) { resolver(val); resolver = null; } } },
    rx: { recv(): Promise<T> { return new Promise((r) => { resolver = r; }); } },
  };
};

const { tx, rx } = createChannel<string>();

// thread::spawn + move
setTimeout(() => {
  tx.send("hi"); // tx.send(val).unwrap()
}, 0);

// rx.recv().unwrap() → await rx.recv()
const received = await rx.recv();
console.log(`Got: ${received}`);
