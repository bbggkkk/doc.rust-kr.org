// Node.js: execute 메서드에서 작업을 채널로 전송
class ThreadPool {
  constructor(size) {
    this.workers = [];
    for (let i = 0; i < size; i++) {
      this.workers.push({ id: i });
    }
  }

  execute(job) {
    // Rust: sender.send(Box::new(f))에 해당
    job();
  }
}
