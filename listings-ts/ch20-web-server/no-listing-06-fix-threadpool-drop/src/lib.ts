import { Worker as WorkerThread } from "worker_threads";

// Drop 구현 수정: Option의 take 사용
class ThreadPool {
  private workers: PoolWorker[] = [];

  async shutdown(): Promise<void> {
    for (const worker of this.workers) {
      console.log(`Shutting down worker ${worker.id}`);

      // if let Some(thread) = worker.thread.take() 에 해당
      // thread를 꺼내고 null로 설정
      if (worker.thread !== null) {
        const thread = worker.thread;
        worker.thread = null; // None으로 대체
        await thread.terminate(); // thread.join().unwrap()
      }
    }
  }
}
