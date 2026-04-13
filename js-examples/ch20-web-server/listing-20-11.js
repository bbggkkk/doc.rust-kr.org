// Node.js: 각 연결을 비동기로 처리
// Node.js는 이벤트 루프 기반이므로 스레드 생성 없이 동시 처리가 됩니다
const net = require("net");

const server = net.createServer((socket) => {
  handleConnection(socket);
});

function handleConnection(socket) {
  socket.on("data", () => {
    socket.write("HTTP/1.1 200 OK\r\n\r\n");
    socket.end();
  });
}

server.listen(7878, "127.0.0.1");
