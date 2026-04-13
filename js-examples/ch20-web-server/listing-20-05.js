// 예제 20-5: HTML 파일 반환하기
// Rust의 TcpListener + fs::read_to_string은
// Node.js의 http.createServer + fs.readFileSync에 해당합니다.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const contents = fs.readFileSync("hello.html", "utf-8");
  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(contents),
    "Content-Type": "text/html",
  });
  res.end(contents);
});

server.listen(7878, "127.0.0.1", () => {
  console.log("Server running on 127.0.0.1:7878");
});
