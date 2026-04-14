import { Worker as WorkerThread } from "worker_threads";

type Job = () => void;

// recv가 에러를 반환하면 루프를 벗어나는 워커 구현
class PoolWorker {
  id: number;
  thread: WorkerThread | null;

  constructor(id: number, sharedQueue: any) {
    this.id = id;
    // thread::spawn(move || loop { match receiver.lock()...recv() { ... } })
    // 메시지 수신 실패 시 (채널 닫힘) 워커 종료
    this.thread = new WorkerThread(`
      const { parentPort } = require("worker_threads");
      parentPort.on("message", (job) => {
        console.log("Worker ${id} got a job; executing.");
        // job();
      });
      parentPort.on("close", () => {
        // Err(_) => { break; } 에 해당
        console.log("Worker ${id} disconnected; shutting down.");
        process.exit(0);
      });
    `, { eval: true });
  }
}
