import { ThreadPool } from "./lib"; // use hello::ThreadPool;

function main() {
  const server = net.createServer();
  const pool = new ThreadPool(4);

  server.on("connection", (socket) => {
    pool.execute(() => {
      handleConnection(socket);
    });
  });

  server.listen(7878, "127.0.0.1");
}
