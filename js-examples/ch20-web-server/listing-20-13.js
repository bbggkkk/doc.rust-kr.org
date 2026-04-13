// Node.js: size 검증이 있는 ThreadPool
class ThreadPool {
  constructor(size) {
    if (size <= 0) {
      throw new Error("ThreadPool size must be greater than zero");
    }
    this.size = size;
  }

  execute(f) { /* ... */ }
}

module.exports = { ThreadPool };
