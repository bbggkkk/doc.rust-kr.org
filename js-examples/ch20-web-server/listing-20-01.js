// 예제 20-1: TCP 연결 수신 대기하기
// Rust의 TcpListener::bind는 Node.js의 net.createServer()에 해당합니다.

const net = require("net");

const server = net.createServer((stream) => {
  console.log("Connection established!");
  stream.end();
});

server.listen(7878, "127.0.0.1", () => {
  console.log("Server running on 127.0.0.1:7878");
});
