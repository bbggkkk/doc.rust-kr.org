// Node.js: Arc<Mutex<Receiver>> 패턴 — 여러 워커 간 수신자 공유
// Node.js에서는 메인 스레드가 작업을 워커에게 분배합니다

class ThreadPool {
  constructor(size) {
    this.workers = [];
    this.nextWorker = 0;
    for (let i = 0; i < size; i++) {
      this.workers.push({ id: i, busy: false });
    }
  }

  execute(job) {
    const worker = this.workers[this.nextWorker % this.workers.length];
    this.nextWorker++;
    job(); // 워커에게 작업 분배
  }
}
