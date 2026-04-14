import { Worker as WorkerThread } from "worker_threads";
import { EventEmitter } from "events";

type Job = () => void;

export class ThreadPool {
  private workers: PoolWorker[] = [];
  private jobEmitter = new EventEmitter(); // sender/receiver 채널 역할
  private closed = false;

  constructor(size: number) {
    if (size <= 0) {
      throw new Error("Pool size must be greater than 0");
    }

    for (let id = 0; id < size; id++) {
      this.workers.push(new PoolWorker(id, this.jobEmitter));
    }
  }

  execute(f: Job): void {
    // self.sender.as_ref().unwrap().send(job).unwrap()
    this.jobEmitter.emit("job", f);
  }

  // impl Drop for ThreadPool
  async shutdown(): Promise<void> {
    // drop(self.sender.take()) - 채널 닫기
    this.closed = true;
    this.jobEmitter.emit("close");

    for (const worker of this.workers) {
      console.log(`Shutting down worker ${worker.id}`);

      if (worker.thread !== null) {
        const thread = worker.thread;
        worker.thread = null;
        await thread.terminate(); // thread.join().unwrap()
      }
    }
  }
}

class PoolWorker {
  id: number;
  thread: WorkerThread | null; // Option<thread::JoinHandle<()>>

  constructor(id: number, jobEmitter: EventEmitter) {
    this.id = id;

    // thread::spawn(move || loop { match receiver...recv() { ... } })
    // 메인 스레드에서 이벤트를 수신하여 작업 실행
    jobEmitter.on("job", (job: Job) => {
      console.log(`Worker ${id} got a job; executing.`);
      job();
    });

    jobEmitter.on("close", () => {
      console.log(`Worker ${id} disconnected; shutting down.`);
    });

    this.thread = null; // 실제 Worker 스레드 대신 이벤트 기반
  }
}
