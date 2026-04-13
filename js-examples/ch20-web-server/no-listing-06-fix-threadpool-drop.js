// Node.js: Option의 take로 스레드를 꺼내서 join
class ThreadPool {
  shutdown() {
    for (const worker of this.workers) {
      console.log(`Shutting down worker ${worker.id}`);
      if (worker.thread) {
        const thread = worker.thread;
        worker.thread = null; // Option::take()에 해당
        thread.join();
      }
    }
  }
}
