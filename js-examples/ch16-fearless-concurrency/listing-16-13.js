// Rust에서는 Mutex를 여러 스레드로 move할 수 없어 컴파일 에러가 납니다.
// JS는 싱글 스레드이므로 공유 상태에 대한 동시 접근 문제가 없습니다.

let counter = 0;

const promises = [];
for (let i = 0; i < 10; i++) {
  promises.push(
    new Promise((resolve) => {
      setTimeout(() => {
        counter += 1; // JS에서는 락 없이 직접 수정 가능
        resolve();
      }, 0);
    })
  );
}

Promise.all(promises).then(() => {
  console.log(`Result: ${counter}`);
});
