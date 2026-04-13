// JS는 싱글 스레드이므로, setTimeout으로 비동기 실행을 흉내냅니다.
// 실제 병렬 실행은 일어나지 않습니다.

setTimeout(() => {
  for (let i = 1; i < 10; i++) {
    console.log(`hi number ${i} from the spawned callback!`);
  }
}, 0);

for (let i = 1; i < 5; i++) {
  console.log(`hi number ${i} from the main script!`);
}
