// Rust에서는 Rc<T>가 스레드 안전하지 않아 스레드 간 공유 시 컴파일 에러가 납니다.
// JS는 싱글 스레드이므로 참조 공유에 대한 스레드 안전성 문제가 없습니다.

// JS에서는 그냥 공유 변수를 사용하면 됩니다
let counter = 0;

const promises = [];
for (let i = 0; i < 10; i++) {
  promises.push(
    new Promise((resolve) => {
      setTimeout(() => {
        counter += 1;
        resolve();
      }, 0);
    })
  );
}

Promise.all(promises).then(() => {
  console.log(`Result: ${counter}`);
});
