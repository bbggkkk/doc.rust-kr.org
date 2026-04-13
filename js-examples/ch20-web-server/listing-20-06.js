// Node.js: 요청 경로에 따라 다른 응답 보내기
const net = require("net");
const fs = require("fs");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const requestLine = data.toString().split("\r\n")[0];
    let statusLine, filename;

    if (requestLine === "GET / HTTP/1.1") {
      statusLine = "HTTP/1.1 200 OK";
      filename = "hello.html";
    } else {
      statusLine = "HTTP/1.1 404 NOT FOUND";
      filename = "404.html";
    }

    const contents = fs.readFileSync(filename, "utf8");
    const response = `${statusLine}\r\nContent-Length: ${contents.length}\r\n\r\n${contents}`;
    socket.write(response);
    socket.end();
  });
});

server.listen(7878, "127.0.0.1");
