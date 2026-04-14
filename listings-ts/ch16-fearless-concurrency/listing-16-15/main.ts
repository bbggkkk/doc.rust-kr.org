// Rust의 Arc<Mutex<T>> → JS의 SharedArrayBuffer + Atomics
// Arc = 스레드 안전한 참조 카운팅 (Rc의 스레드 안전 버전)
// Mutex = 상호 배제 (한 번에 하나의 스레드만 접근)

const shared = new SharedArrayBuffer(4);
const counter = new Int32Array(shared);
counter[0] = 0;

// 10개의 "스레드"에서 카운터 증가
const workers: Promise<void>[] = [];
for (let i = 0; i < 10; i++) {
  // Rust: Arc::clone(&counter) → 참조 카운트 증가
  // Rust: counter.lock().unwrap() → 락 획득
  // JS: Atomics.add → 원자적 연산 (락 없이 안전)
  Atomics.add(counter, 0, 1);
}

console.log(`Result: ${counter[0]}`); // Result: 10
