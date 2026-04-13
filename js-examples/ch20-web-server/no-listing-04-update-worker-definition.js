// Node.js: Worker 정의를 Option으로 변경
class WorkerInstance {
  constructor(id) {
    this.id = id;
    this.thread = null; // Rust의 Option<JoinHandle<()>>에 해당
  }
}
