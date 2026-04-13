// 예제 20-10: 느린 요청 시뮬레이션
// Node.js는 이벤트 루프 기반이므로 싱글스레드에서도 비동기 처리가 가능합니다.
// setTimeout으로 느린 요청을 시뮬레이션합니다.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const respond = (statusCode, filename) => {
    const contents = fs.readFileSync(filename, "utf-8");
    res.writeHead(statusCode, {
      "Content-Length": Buffer.byteLength(contents),
      "Content-Type": "text/html",
    });
    res.end(contents);
  };

  if (req.url === "/") {
    respond(200, "hello.html");
  } else if (req.url === "/sleep") {
    // Node.js는 비동기이므로 다른 요청을 블록하지 않습니다.
    // Rust와 달리 별도의 스레드 풀이 필요 없습니다.
    setTimeout(() => respond(200, "hello.html"), 5000);
  } else {
    respond(404, "404.html");
  }
});

server.listen(7878, "127.0.0.1", () => {
  console.log("Server running on 127.0.0.1:7878");
});
