// Node.js: HTTP 성공 응답 보내기
const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", () => {
    const response = "HTTP/1.1 200 OK\r\n\r\n";
    socket.write(response);
    socket.end();
  });
});

server.listen(7878, "127.0.0.1");
