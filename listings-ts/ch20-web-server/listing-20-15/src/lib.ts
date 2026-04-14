import { Worker as WorkerThread } from "worker_threads";

export class ThreadPool {
  private workers: PoolWorker[] = [];

  // --생략--
  constructor(size: number) {
    if (size <= 0) {
      throw new Error("Pool size must be greater than 0");
    }

    for (let id = 0; id < size; id++) {
      this.workers.push(new PoolWorker(id));
    }
  }

  // --생략--
  execute(f: () => void): void {}
}

class PoolWorker {
  private id: number;
  private thread: WorkerThread;

  constructor(id: number) {
    this.id = id;
    this.thread = new WorkerThread(
      "// empty worker script",
      { eval: true }
    );
  }
}
