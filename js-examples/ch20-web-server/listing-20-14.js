// Node.js: 스레드를 저장할 공간 만들기
class ThreadPool {
  constructor(size) {
    if (size <= 0) throw new Error("size must be > 0");
    this.threads = new Array(size);
    for (let i = 0; i < size; i++) {
      // 스레드 생성 코드가 여기에 들어갈 예정
    }
  }
}
