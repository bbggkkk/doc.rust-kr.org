// Node.js: Worker 생성 시 thread를 Some으로 감싸기
class WorkerInstance {
  constructor(id) {
    this.id = id;
    this.thread = { join() { console.log(`Worker ${id} joined`); } };
  }
}
