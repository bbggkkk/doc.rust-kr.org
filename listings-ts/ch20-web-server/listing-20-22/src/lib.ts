import { Worker as WorkerThread } from "worker_threads";

// impl Drop for ThreadPool - process.on('exit') 또는 명시적 cleanup에 해당
class ThreadPool {
  private workers: PoolWorker[] = [];

  // Drop 트레이트 구현 -> 소멸자/정리 메서드
  async shutdown(): Promise<void> {
    for (const worker of this.workers) {
      console.log(`Shutting down worker ${worker.id}`);

      // worker.thread.join().unwrap() 에 해당
      await worker.thread.terminate();
    }
  }
}
