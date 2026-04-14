import { Worker as WorkerThread, MessagePort } from "worker_threads";

class ThreadPool {
  private workers: PoolWorker[] = [];
  private sender: MessagePort | null; // Option<mpsc::Sender<Job>>

  // --생략--

  async shutdown(): Promise<void> {
    // drop(self.sender.take()) 에 해당
    // sender를 먼저 닫아서 워커들에게 종료 신호 전달
    if (this.sender) {
      this.sender.close();
      this.sender = null;
    }

    for (const worker of this.workers) {
      console.log(`Shutting down worker ${worker.id}`);

      if (worker.thread !== null) {
        const thread = worker.thread;
        worker.thread = null;
        await thread.terminate();
      }
    }
  }
}
