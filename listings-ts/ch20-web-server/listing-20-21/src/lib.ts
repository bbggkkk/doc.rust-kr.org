// --생략--

class PoolWorker {
  constructor(id: number, sharedQueue: { dequeue: () => Job | undefined }) {
    // while let Ok(job) = receiver.lock().unwrap().recv() 에 해당
    // 주의: 이 방식은 Rust에서 락을 오래 유지하는 문제가 있음
    // while let은 블록이 끝날 때까지 MutexGuard를 유지하기 때문
    this.thread = new WorkerThread(`
      parentPort.on("message", (msg) => {
        // while let 방식: 락이 job() 실행 중에도 유지됨
        // -> 다른 워커가 작업을 받을 수 없음
        console.log("Worker ${id} got a job; executing.");
      });
    `, { eval: true });
  }
}
