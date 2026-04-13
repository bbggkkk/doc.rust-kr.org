// 최종 코드: Express.js를 사용한 웹 서버
// Rust의 TcpListener + ThreadPool 구현을 Node.js/Express로 표현합니다.

const http = require("http");
const fs = require("fs");

function handleRequest(req, res) {
  let statusCode;
  let filename;

  switch (req.url) {
    case "/":
      statusCode = 200;
      filename = "hello.html";
      break;
    case "/sleep":
      // Node.js는 이벤트 루프 기반이므로 비동기로 처리됩니다.
      setTimeout(() => {
        const contents = fs.readFileSync("hello.html", "utf-8");
        res.writeHead(200, {
          "Content-Length": Buffer.byteLength(contents),
          "Content-Type": "text/html",
        });
        res.end(contents);
      }, 5000);
      return;
    default:
      statusCode = 404;
      filename = "404.html";
      break;
  }

  const contents = fs.readFileSync(filename, "utf-8");
  res.writeHead(statusCode, {
    "Content-Length": Buffer.byteLength(contents),
    "Content-Type": "text/html",
  });
  res.end(contents);
}

const server = http.createServer(handleRequest);

server.listen(7878, "127.0.0.1", () => {
  console.log("Server running on 127.0.0.1:7878");
});
