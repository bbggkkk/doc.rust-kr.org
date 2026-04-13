// 예제 20-25: 우아한 종료 (Graceful Shutdown)
// Node.js에서의 서버 종료 처리

const http = require("http");
const fs = require("fs");

let requestCount = 0;

const server = http.createServer((req, res) => {
  requestCount++;
  console.log(`Request #${requestCount}`);

  const contents = fs.readFileSync("hello.html", "utf-8");
  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(contents),
    "Content-Type": "text/html",
  });
  res.end(contents);

  // 두 개의 요청을 처리한 후 서버 종료
  if (requestCount >= 2) {
    console.log("Shutting down.");
    server.close(() => {
      console.log("Server shut down gracefully.");
      process.exit(0);
    });
  }
});

server.listen(7878, "127.0.0.1", () => {
  console.log("Server running on 127.0.0.1:7878");
});

// SIGTERM 시그널 핸들링 (프로덕션 패턴)
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    process.exit(0);
  });
});
