// 채널로 메시지 보내기
// Rust: tx.send(val) → JS: postMessage() 또는 이벤트 발행
// mpsc::channel → MessageChannel / EventEmitter
type Message = { data: string };

// 간단한 채널 구현
const createChannel = <T>() => {
  const queue: T[] = [];
  let resolver: ((value: T) => void) | null = null;

  return {
    tx: {
      // Rust: tx.send(val) - 소유권이 이동됨
      send(val: T): void {
        if (resolver) { resolver(val); resolver = null; }
        else queue.push(val);
      },
    },
    rx: {
      // Rust: rx.recv() - 블로킹 수신
      recv(): Promise<T> {
        if (queue.length > 0) return Promise.resolve(queue.shift()!);
        return new Promise((resolve) => { resolver = resolve; });
      },
    },
  };
};

const { tx, rx } = createChannel<string>();

// 생성된 스레드에서 메시지 전송
// Rust: thread::spawn(move || { tx.send(val) })
setTimeout(() => {
  const val = "hi";
  tx.send(val); // 소유권 이동 (JS에서는 참조 복사)
}, 0);
