// Rust: pub fn build(size: usize) -> Result<ThreadPool, PoolCreationError>

class PoolCreationError extends Error {}

class ThreadPool {
  static build(size: number): ThreadPool {
    if (size <= 0) {
      throw new PoolCreationError("Pool size must be greater than 0");
    }
    return new ThreadPool(size);
  }

  constructor(private size: number) {}
}
