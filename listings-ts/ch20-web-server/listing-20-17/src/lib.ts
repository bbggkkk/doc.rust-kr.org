import { Worker as WorkerThread, MessageChannel, MessagePort } from "worker_threads";

type Job = () => void;

export class ThreadPool {
  // --생략--
  constructor(size: number) {
    if (size <= 0) {
      throw new Error("Pool size must be greater than 0");
    }

    const { port1: sender, port2: receiver } = new MessageChannel();

    for (let id = 0; id < size; id++) {
      // 수신자를 각 워커에 전달하려 하지만,
      // MessagePort는 하나의 수신자만 가능 (mpsc와 동일한 제약)
      this.workers.push(new PoolWorker(id, receiver));
    }
  }
}

// --생략--

class PoolWorker {
  constructor(id: number, receiver: MessagePort) {
    // receiver를 스레드에서 사용
  }
}
