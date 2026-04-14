// --생략--

// type Job = Box<dyn FnOnce() + Send + 'static>;
// TypeScript에서는 단순히 콜백 함수 타입
type Job = () => void;

class ThreadPool {
  // --생략--

  execute(f: Job): void {
    // Box::new(f) 후 채널로 전송하는 것에 해당
    const job: Job = f;

    // self.sender.send(job).unwrap();
    this.sender.postMessage("job"); // 실제로는 함수를 직렬화할 수 없으므로
    // 워커에게 작업을 전달
    this.dispatchJob(job);
  }
}

// --생략--
