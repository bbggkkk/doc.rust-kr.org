// Rust: send 후 val 사용 불가 (소유권 이동)
// JS: 전송 후에도 변수 사용 가능 (소유권 개념 없음)
const createChannel = <T>() => {
  let resolver: ((value: T) => void) | null = null;
  return {
    tx: { send(val: T) { if (resolver) { resolver(val); resolver = null; } } },
    rx: { recv(): Promise<T> { return new Promise((r) => { resolver = r; }); } },
  };
};

const { tx, rx } = createChannel<string>();

setTimeout(() => {
  const val = "hi";
  tx.send(val);
  console.log(`val is ${val}`); // JS에서는 OK! Rust에서는 컴파일 에러!
  // Rust: send()가 val의 소유권을 가져가므로 이후 사용 불가
}, 0);

const received = await rx.recv();
console.log(`Got: ${received}`);
