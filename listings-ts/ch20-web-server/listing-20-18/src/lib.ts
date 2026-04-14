import { Worker as WorkerThread } from "worker_threads";
import { EventEmitter } from "events";

type Job = () => void;

// Arc<Mutex<T>>에 해당: 여러 워커가 공유하는 작업 큐
// Node.js에서는 EventEmitter나 공유 큐로 구현
class SharedJobQueue {
  private jobs: Job[] = [];
  // Mutex에 해당: 한 번에 하나의 워커만 작업을 꺼낼 수 있음
  private locked = false;

  dequeue(): Job | undefined {
    return this.jobs.shift();
  }

  enqueue(job: Job): void {
    this.jobs.push(job);
  }
}

export class ThreadPool {
  // --생략--
  constructor(size: number) {
    if (size <= 0) {
      throw new Error("Pool size must be greater than 0");
    }

    // Arc<Mutex<Receiver>>에 해당 - 공유 큐
    const sharedQueue = new SharedJobQueue();

    for (let id = 0; id < size; id++) {
      // Arc::clone(&receiver)에 해당 - 같은 큐를 공유
      this.workers.push(new PoolWorker(id, sharedQueue));
    }
  }
}

// --생략--

class PoolWorker {
  constructor(
    id: number,
    receiver: SharedJobQueue // Arc<Mutex<mpsc::Receiver<Job>>>
  ) {
    // --생략--
  }
}
