// join을 너무 일찍 호출하면 병렬이 아닌 순차 실행이 됩니다.
// JS에서 await을 너무 일찍 하는 것과 같습니다.

async function main() {
  const workerDone = new Promise<void>((resolve) => {
    // 생성된 스레드 작업
    setTimeout(() => {
      for (let i = 1; i < 10; i++) {
        console.log(`hi number ${i} from the spawned thread!`);
      }
      resolve();
    }, 0);
  });

  // handle.join()을 먼저 호출 → 완료될 때까지 대기
  await workerDone; // 여기서 기다리므로 아래 루프는 나중에 실행

  for (let i = 1; i < 5; i++) {
    console.log(`hi number ${i} from the main thread!`);
  }
}

main();
