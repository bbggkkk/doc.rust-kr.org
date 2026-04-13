// Node.js: sender를 먼저 버린 후 워커 스레드를 조인
class ThreadPool {
  shutdown() {
    // 채널 닫기 — Rust의 drop(sender)에 해당
    this.sender = null;

    for (const worker of this.workers) {
      console.log(`Shutting down worker ${worker.id}`);
      if (worker.thread) {
        const thread = worker.thread;
        worker.thread = null;
        // thread.join();
      }
    }
  }
}
