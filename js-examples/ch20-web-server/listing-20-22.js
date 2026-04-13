// Node.js: 서버 종료 시 워커 정리 (Drop 구현)
class ThreadPool {
  constructor(size) {
    this.workers = [];
    for (let i = 0; i < size; i++) {
      this.workers.push({ id: i, thread: null });
    }
  }

  shutdown() {
    for (const worker of this.workers) {
      console.log(`Shutting down worker ${worker.id}`);
      // worker.thread.terminate();
    }
  }
}
