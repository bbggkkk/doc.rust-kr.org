import { ThreadPool } from "./lib";
import * as net from "net";
import * as fs from "fs";

function main() {
  const server = net.createServer();
  const pool = new ThreadPool(4);

  let connectionCount = 0;

  server.on("connection", (socket) => {
    connectionCount++;
    if (connectionCount > 2) return;

    pool.execute(() => {
      handleConnection(socket);
    });

    if (connectionCount === 2) {
      console.log("Shutting down.");
      server.close();
    }
  });

  server.listen(7878, "127.0.0.1");
}

function handleConnection(socket: net.Socket) {
  const chunks: Buffer[] = [];
  socket.on("data", (data) => {
    chunks.push(data);
    const request = Buffer.concat(chunks).toString();

    if (request.startsWith("GET / HTTP/1.1")) {
      const contents = fs.readFileSync("hello.html", "utf-8");
      socket.write(`HTTP/1.1 200 OK\r\nContent-Length: ${contents.length}\r\n\r\n${contents}`);
    } else if (request.startsWith("GET /sleep HTTP/1.1")) {
      // 5초 대기 시뮬레이션
      setTimeout(() => {
        const contents = fs.readFileSync("hello.html", "utf-8");
        socket.write(`HTTP/1.1 200 OK\r\nContent-Length: ${contents.length}\r\n\r\n${contents}`);
      }, 5000);
    } else {
      const contents = fs.readFileSync("404.html", "utf-8");
      socket.write(`HTTP/1.1 404 NOT FOUND\r\nContent-Length: ${contents.length}\r\n\r\n${contents}`);
    }
  });
}

main();
