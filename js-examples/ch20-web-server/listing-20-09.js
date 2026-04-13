// 예제 20-9: 요청에 따라 다른 응답 반환하기 (리팩터링)
// Express.js 패턴으로 라우팅을 구현합니다.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let statusCode;
  let filename;

  if (req.url === "/") {
    statusCode = 200;
    filename = "hello.html";
  } else {
    statusCode = 404;
    filename = "404.html";
  }

  const contents = fs.readFileSync(filename, "utf-8");
  res.writeHead(statusCode, {
    "Content-Length": Buffer.byteLength(contents),
    "Content-Type": "text/html",
  });
  res.end(contents);
});

server.listen(7878, "127.0.0.1", () => {
  console.log("Server running on 127.0.0.1:7878");
});
