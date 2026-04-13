// Rust의 Arc<Mutex<T>> → JS에서는 싱글 스레드이므로
// SharedArrayBuffer + Atomics로 개념적 유사성을 보여줍니다.

// 싱글 스레드 환경에서의 단순 구현
let counter = 0;

const promises = [];
for (let i = 0; i < 10; i++) {
  promises.push(
    new Promise((resolve) => {
      setTimeout(() => {
        counter += 1; // 싱글 스레드이므로 경합 조건 없음
        resolve();
      }, 0);
    })
  );
}

Promise.all(promises).then(() => {
  console.log(`Result: ${counter}`); // Result: 10
});
