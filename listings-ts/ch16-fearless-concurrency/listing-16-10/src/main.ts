// 여러 메시지를 채널로 보내기
// Rust: for val in vals { tx.send(val) } + for received in rx { ... }
// JS: AsyncGenerator 또는 이벤트 스트림 패턴
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// 간단한 async 채널 (AsyncIterable)
function createChannel<T>() {
  const queue: T[] = [];
  let resolver: ((value: T) => void) | null = null;
  let closed = false;

  return {
    tx: {
      send(val: T) { if (resolver) { resolver(val); resolver = null; } else queue.push(val); },
      close() { closed = true; if (resolver) resolver(undefined as T); },
    },
    rx: {
      async *[Symbol.asyncIterator]() {
        while (true) {
          if (queue.length > 0) yield queue.shift()!;
          else if (closed) break;
          else yield await new Promise<T>((r) => { resolver = r; });
        }
      },
    },
  };
}

const { tx, rx } = createChannel<string>();

// thread::spawn(move || { ... })
(async () => {
  const vals = ["hi", "from", "the", "thread"];
  for (const val of vals) {
    tx.send(val);
    await sleep(1000);
  }
  tx.close();
})();

// for received in rx { println!("Got: {}", received); }
for await (const received of rx) {
  console.log(`Got: ${received}`);
}
