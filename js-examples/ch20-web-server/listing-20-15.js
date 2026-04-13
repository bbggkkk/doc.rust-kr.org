// 예제 20-15: Worker 구조체 기반 스레드 풀
// Node.js에서는 worker_threads 모듈로 멀티스레드를 구현합니다.

const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // ThreadPool 구현
  class ThreadPool {
    constructor(size) {
      this.workers = [];
      for (let id = 0; id < size; id++) {
        const worker = new Worker(__filename, { workerData: { id } });
        this.workers.push(worker);
      }
      console.log(`ThreadPool created with ${size} workers`);
    }
  }

  const pool = new ThreadPool(4);
} else {
  // Worker 스레드
  console.log(`Worker ${workerData.id} started`);
  parentPort.on("message", (task) => {
    console.log(`Worker ${workerData.id} got a job; executing.`);
  });
}
