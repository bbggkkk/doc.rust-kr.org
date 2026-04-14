// JoinHandle.join() → JS의 await (Promise 완료 대기)
const spawnedTask = async () => {
  for (let i = 1; i < 10; i++) {
    console.log(`hi number ${i} from the spawned thread!`);
    await new Promise((r) => setTimeout(r, 1));
  }
};

const main = async () => {
  // thread::spawn → 비동기 태스크 시작
  const handle = spawnedTask();

  for (let i = 1; i < 5; i++) {
    console.log(`hi number ${i} from the main thread!`);
    await new Promise((r) => setTimeout(r, 1));
  }

  // handle.join().unwrap() → await로 완료 대기
  await handle; // 생성된 태스크가 끝날 때까지 기다림
};

main();
