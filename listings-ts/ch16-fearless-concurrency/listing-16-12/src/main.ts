// Mutex<T>: 상호 배제 - 한 번에 하나의 접근만 허용
// JS는 싱글스레드이므로 Mutex가 불필요하지만, 개념적으로 표현
// 비동기 코드에서는 async-mutex 패턴이 유사
class Mutex<T> {
  constructor(private value: T) {}

  // Rust: m.lock().unwrap() → 락을 획득하여 내부 값에 접근
  // JS: 싱글스레드라 락이 불필요하지만, 개념적으로 표현
  lock(): { value: T; release: () => void } {
    return {
      value: this.value,
      release: () => {
        // Rust: MutexGuard가 스코프를 벗어나면 자동 해제
      },
    };
  }

  getValue(): T { return this.value; }
  setValue(v: T) { this.value = v; }
}

const m = new Mutex(5);

{
  // Rust: let mut num = m.lock().unwrap(); *num = 6;
  m.setValue(6);
  // Rust: MutexGuard가 스코프 끝에서 자동 해제 (Drop)
}

console.log(`m = ${m.getValue()}`); // 6
