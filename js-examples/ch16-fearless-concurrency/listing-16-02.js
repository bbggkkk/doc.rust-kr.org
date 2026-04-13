// JS에서는 Promise를 사용하여 비동기 작업 완료를 기다릴 수 있습니다.
// Rust의 join()에 해당합니다.

async function main() {
  const spawned = new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 1; i < 10; i++) {
        console.log(`hi number ${i} from the spawned callback!`);
      }
      resolve();
    }, 0);
  });

  for (let i = 1; i < 5; i++) {
    console.log(`hi number ${i} from the main script!`);
  }

  await spawned; // handle.join().unwrap()에 해당
}

main();
