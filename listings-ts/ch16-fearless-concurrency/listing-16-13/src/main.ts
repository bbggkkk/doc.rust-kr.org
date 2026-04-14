// Mutex를 여러 스레드에서 공유하려는 시도
// Rust: move 클로저가 counter 소유권을 가져가므로 두 번째 스레드에서 사용 불가
// JS: 싱글스레드이므로 이런 문제 없음

// Rust에서의 문제를 JS로 개념적 표현
let counter = { value: 0 }; // Mutex::new(0)

const handles: Promise<void>[] = [];

for (let i = 0; i < 10; i++) {
  // Rust: move || 로 소유권 이동 → 두 번째 반복에서 에러!
  // JS: 클로저가 counter를 자유롭게 캡처 (문제없음)
  const handle = (async () => {
    counter.value += 1; // Rust: *num += 1
  })();
  handles.push(handle);
}

await Promise.all(handles);
console.log(`Result: ${counter.value}`);
// JS에서는 싱글스레드라 경합 조건 없이 10이 출력됨
