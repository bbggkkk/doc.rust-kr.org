// Rust의 thread::spawn → JS의 Worker (또는 Web Worker)
// JS는 싱글스레드이므로 Worker를 사용해 병렬 실행합니다.

// Worker 파일 (spawned-thread.ts) 내용이라고 가정:
// for (let i = 1; i < 10; i++) {
//   console.log(`hi number ${i} from the spawned thread!`);
//   await sleep(1);
// }

// 메인 스레드
const worker = new Worker("spawned-thread.js");
// Rust: thread::spawn(|| { ... })

for (let i = 1; i < 5; i++) {
  console.log(`hi number ${i} from the main thread!`);
  // thread::sleep → await sleep
}

// JS에서는 메인 스레드가 끝나도 Worker가 계속 실행될 수 있음
// Rust에서는 메인 스레드 종료 시 생성된 스레드도 종료됨
