// Node.js: 스레드 풀 인터페이스
// Node.js에서는 worker_threads 모듈로 스레드 풀을 구현합니다

class ThreadPool {
  constructor(size) {
    this.workers = new Array(size).fill(null);
  }

  execute(fn) {
    fn();
  }
}

const pool = new ThreadPool(4);
console.log("ThreadPool created with 4 workers");
