// Node.js: TCP 스트림에서 요청 데이터 읽기
const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const request = data.toString();
    const lines = request.split("\r\n");
    console.log("Request:", lines);
  });
});

server.listen(7878, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:7878");
});
