import { Worker as WorkerThread } from "worker_threads";

class PoolWorker {
  id: number;
  // Option<thread::JoinHandle<()>> 에 해당
  // null이 될 수 있도록 변경
  thread: WorkerThread | null;

  constructor(id: number) {
    this.id = id;
    this.thread = null;
  }
}
