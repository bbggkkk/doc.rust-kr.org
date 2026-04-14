import { Worker as WorkerThread } from "worker_threads";

type Job = () => void;

// --생략--

class PoolWorker {
  id: number;
  thread: WorkerThread;

  constructor(id: number, sharedQueue: { dequeue: () => Job | undefined }) {
    this.id = id;
    // thread::spawn(move || loop { ... }) 에 해당
    // 워커 스레드에서 무한 루프로 작업을 받아 실행
    this.thread = new WorkerThread(`
      const { parentPort } = require("worker_threads");
      // loop { let job = receiver.lock().unwrap().recv().unwrap(); ... }
      parentPort.on("message", (msg) => {
        console.log("Worker ${id} got a job; executing.");
        // job();
      });
    `, { eval: true });

    console.log(`Worker ${id} got a job; executing.`);
  }
}
