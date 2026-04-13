// Node.js: while let 방식의 워커 (Rust에서는 락이 오래 유지됨)
// JavaScript에서는 이 문제가 발생하지 않습니다 —
// 이벤트 루프 기반이므로 락 경쟁이 없습니다

function workerLoop(receiver) {
  receiver.on("message", (job) => {
    console.log("Worker got a job; executing.");
    job();
  });
}
