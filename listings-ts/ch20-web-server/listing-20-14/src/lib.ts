import { Worker } from "worker_threads";

export class ThreadPool {
  private workers: Worker[] = [];

  // --생략--
  constructor(size: number) {
    if (size <= 0) {
      throw new Error("Pool size must be greater than 0");
    }

    // size만큼 워커를 저장할 공간 확보
    for (let i = 0; i < size; i++) {
      // create some threads and store them in the array
    }
  }

  // --생략--
  execute(f: () => void): void {}
}
