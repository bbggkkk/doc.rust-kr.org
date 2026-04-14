// Rust의 Mutex<T> → JS에서는 싱글스레드이므로 뮤텍스가 불필요합니다.
// 상호 배제(mutual exclusion)는 멀티스레드에서 동시 접근을 방지하는 메커니즘입니다.
// JS 싱글스레드에서는 간단한 변수로 충분합니다.

// Rust: Mutex::new(5) → JS: 그냥 변수
let m = 5;

{
  // Rust: let mut num = m.lock().unwrap();
  // JS에서는 락이 필요 없음 - 싱글스레드이므로
  m = 6;
}

console.log(`m = ${m}`); // m = 6
