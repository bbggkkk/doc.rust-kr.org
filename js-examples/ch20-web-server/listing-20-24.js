// Node.js: recv 에러 시 루프 종료
function createWorker(id, receiver) {
  receiver.on("message", (job) => {
    console.log(`Worker ${id} got a job; executing.`);
    job();
  });

  receiver.on("close", () => {
    console.log(`Worker ${id} disconnected; shutting down.`);
  });
}
