// Node.js: 채널을 통해 작업을 전송하는 패턴
class ThreadPool {
  constructor(size) {
    if (size <= 0) throw new Error("size must be > 0");
    this.workers = [];
    for (let i = 0; i < size; i++) {
      this.workers.push({ id: i });
    }
    // Rust의 mpsc::channel()에 해당하는 메시지 큐
    this.jobQueue = [];
  }
}
