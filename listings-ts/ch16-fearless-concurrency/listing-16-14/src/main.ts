// Rc<Mutex<T>>: Rc는 스레드 간 공유에 안전하지 않음!
// Rust: Rc<T>는 Send 트레이트 미구현 → 스레드 간 전송 불가
// JS: 싱글스레드이므로 이런 구분이 없음

// Rust의 Rc<Mutex<i32>>를 JS로 표현하면 그냥 공유 객체
const counter = { value: 0 }; // Rc::new(Mutex::new(0))

const handles: Promise<void>[] = [];

for (let i = 0; i < 10; i++) {
  // Rust: Rc::clone(&counter) → 참조 카운트 증가
  // 하지만 Rc는 스레드 안전하지 않아 컴파일 에러!
  const counterRef = counter; // Rc::clone
  const handle = (async () => {
    counterRef.value += 1;
  })();
  handles.push(handle);
}

await Promise.all(handles);
console.log(`Result: ${counter.value}`);
