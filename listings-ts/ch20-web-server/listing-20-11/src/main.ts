import { Worker } from "worker_threads";

function main() {
  const server = net.createServer((socket) => {
    // 각 연결마다 새 워커 스레드 생성
    // (Node.js에서는 Worker를 사용하여 별도 스레드에서 실행)
    const worker = new Worker("./handleConnection.js", {
      workerData: { /* stream data */ },
    });
  });

  server.listen(7878, "127.0.0.1");
}
