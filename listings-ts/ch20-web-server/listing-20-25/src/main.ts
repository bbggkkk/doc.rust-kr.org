import { ThreadPool } from "./lib";
import * as net from "net";

function main() {
  const server = net.createServer();
  const pool = new ThreadPool(4);

  let connectionCount = 0;

  server.on("connection", (socket) => {
    connectionCount++;
    // listener.incoming().take(2) 에 해당
    // 두 개의 요청만 처리한 후 종료
    if (connectionCount > 2) return;

    pool.execute(() => {
      handleConnection(socket);
    });

    if (connectionCount === 2) {
      console.log("Shutting down.");
      server.close(); // 서버 종료 -> ThreadPool의 drop이 호출됨
    }
  });

  server.listen(7878, "127.0.0.1");
}
