// join을 먼저 호출하면 생성된 스레드가 끝난 후 메인 루프 실행
const spawnedTask = async () => {
  for (let i = 1; i < 10; i++) {
    console.log(`hi number ${i} from the spawned thread!`);
    await new Promise((r) => setTimeout(r, 1));
  }
};

const main = async () => {
  const handle = spawnedTask();

  // await를 먼저 하면 순차 실행됨 (교차 없음)
  await handle; // 먼저 생성된 태스크 완료 대기

  for (let i = 1; i < 5; i++) {
    console.log(`hi number ${i} from the main thread!`);
    await new Promise((r) => setTimeout(r, 1));
  }
};

main();
