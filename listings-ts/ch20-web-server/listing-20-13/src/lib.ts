export class ThreadPool {
  /**
   * Create a new ThreadPool.
   *
   * @param size - the number of workers in the pool.
   * @throws {Error} if the size is zero.
   */
  constructor(size: number) {
    if (size <= 0) {
      throw new Error("Pool size must be greater than 0");
    }
  }

  // --생략--
  execute(f: () => void): void {}
}
