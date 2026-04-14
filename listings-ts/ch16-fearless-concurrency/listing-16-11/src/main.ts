// 여러 생산자 (mpsc: multiple producer, single consumer)
// Rust: tx.clone()으로 송신자 복제
// JS: 여러 소스가 같은 이벤트 핸들러로 메시지 전달
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const messages: string[] = [];
let resolveNext: (() => void) | null = null;

// 공유 수신 큐 (단일 소비자)
const send = (val: string) => {
  messages.push(val);
  if (resolveNext) { resolveNext(); resolveNext = null; }
};

// tx.clone() → 같은 send 함수를 여러 "스레드"에서 사용
// 생산자 1
(async () => {
  for (const val of ["hi", "from", "the", "thread"]) {
    send(val); // tx1.send(val)
    await sleep(1000);
  }
})();

// 생산자 2
(async () => {
  for (const val of ["more", "messages", "for", "you"]) {
    send(val); // tx.send(val)
    await sleep(1000);
  }
})();

// 소비자: for received in rx
for (let i = 0; i < 8; i++) {
  if (messages.length === 0) {
    await new Promise<void>((r) => { resolveNext = r; });
  }
  console.log(`Got: ${messages.shift()}`);
}
