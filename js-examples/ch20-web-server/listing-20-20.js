// Node.js: 워커에서 작업을 받아 실행
// Node.js에서는 이벤트 기반으로 메시지를 수신합니다

function createWorker(id, receiver) {
  receiver.on("message", (job) => {
    console.log(`Worker ${id} got a job; executing.`);
    job();
  });
}
