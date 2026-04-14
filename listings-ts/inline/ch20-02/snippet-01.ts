// thread::spawn의 시그니처에 해당하는 TypeScript 표현
// Rust: pub fn spawn<F, T>(f: F) -> JoinHandle<T>
//   where F: FnOnce() -> T, F: Send + 'static, T: Send + 'static

import { Worker } from "worker_threads";

// Worker 생성자가 spawn과 유사한 역할
// f: 스레드에서 실행할 함수 (FnOnce에 해당)
// 반환: Worker 인스턴스 (JoinHandle에 해당)
function spawn<T>(f: () => T): Worker {
  // Worker는 별도 스레드에서 f를 실행
  return new Worker(/* workerScript */"./worker.js");
}
