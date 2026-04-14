// thread::spawn → JS에서는 setTimeout/Web Worker로 비동기 실행
// JS는 싱글스레드이므로 진정한 병렬 실행은 Web Worker 필요
// 여기서는 setTimeout으로 개념적 유사성 표현

// 생성된 "스레드" (실제로는 비동기 태스크)
const spawnedTask = async () => {
  for (let i = 1; i < 10; i++) {
    console.log(`hi number ${i} from the spawned thread!`);
    await new Promise((r) => setTimeout(r, 1));
  }
};

// 메인 "스레드"
const mainTask = async () => {
  spawnedTask(); // 병렬로 시작 (await 없이)

  for (let i = 1; i < 5; i++) {
    console.log(`hi number ${i} from the main thread!`);
    await new Promise((r) => setTimeout(r, 1));
  }
  // JS: 메인이 끝나도 이벤트 루프가 남은 태스크 처리
  // Rust: 메인 스레드 종료 시 생성된 스레드도 종료됨
};

mainTask();
