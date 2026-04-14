import { Worker as WorkerThread, MessageChannel } from "worker_threads";

type Job = () => void;

export class ThreadPool {
  private workers: PoolWorker[] = [];
  private sender: MessageChannel["port1"]; // mpsc::Sender<Job> 에 해당

  // --생략--
  constructor(size: number) {
    if (size <= 0) {
      throw new Error("Pool size must be greater than 0");
    }

    const { port1: sender, port2: receiver } = new MessageChannel();
    this.sender = sender;

    for (let id = 0; id < size; id++) {
      this.workers.push(new PoolWorker(id));
    }
  }

  // --생략--
  execute(f: Job): void {}
}
