// JS는 싱글 스레드 — await로 순서를 제어합니다.
// Rust의 join()을 먼저 호출하면 생성된 스레드가 끝날 때까지 대기합니다.

async function main() {
  const spawnedWork = async () => {
    for (let i = 1; i < 10; i++) {
      console.log(`hi number ${i} from the spawned callback!`);
    }
  };

  // join을 먼저 호출 — 생성된 작업이 끝난 뒤 메인 작업 실행
  await spawnedWork();

  for (let i = 1; i < 5; i++) {
    console.log(`hi number ${i} from the main script!`);
  }
}

main();
