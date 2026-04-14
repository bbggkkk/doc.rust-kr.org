// Arc<Mutex<T>>: 스레드 안전한 참조 카운팅 + 상호 배제
// Arc<T>: Atomic Reference Counting - 스레드 간 안전한 공유
// JS에서는 SharedArrayBuffer + Atomics가 가장 가까운 대응

// 개념적 표현: JS 싱글스레드에서는 Arc/Mutex 불필요
const counter = { value: 0 }; // Arc::new(Mutex::new(0))

const handles: Promise<void>[] = [];

for (let i = 0; i < 10; i++) {
  // Arc::clone(&counter) → 원자적 참조 카운트 증가
  const counterRef = counter;
  const handle = (async () => {
    // Rust: counter.lock().unwrap() → 락 획득 후 값 변경
    counterRef.value += 1;
  })();
  handles.push(handle);
}

await Promise.all(handles); // 모든 "스레드" 완료 대기
console.log(`Result: ${counter.value}`); // 10

// 실제 JS 멀티스레드 (Web Worker)에서는:
// const buffer = new SharedArrayBuffer(4);
// const view = new Int32Array(buffer);
// Atomics.add(view, 0, 1); // 원자적 증가
