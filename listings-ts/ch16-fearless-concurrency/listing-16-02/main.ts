// Rust의 JoinHandle → JS의 Worker + Promise
// handle.join()은 스레드 완료를 기다리는 것으로,
// JS에서는 await이나 Worker의 message 이벤트로 처리합니다.

async function main() {
  // thread::spawn → Worker 생성
  const result = new Promise<void>((resolve) => {
    const worker = new Worker("spawned-thread.js");
    worker.onmessage = () => resolve();
  });

  for (let i = 1; i < 5; i++) {
    console.log(`hi number ${i} from the main thread!`);
  }

  // handle.join().unwrap() → await으로 완료 대기
  await result;
}

main();
