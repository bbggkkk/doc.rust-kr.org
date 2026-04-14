import { Worker as WorkerThread } from "worker_threads";

class PoolWorker {
  id: number;
  thread: WorkerThread | null; // Option<thread::JoinHandle<()>>

  constructor(id: number, receiver: any) {
    // --생략--
    this.id = id;
    // Some(thread) 로 감싸는 것에 해당
    this.thread = new WorkerThread("// worker script", { eval: true });
  }
}
