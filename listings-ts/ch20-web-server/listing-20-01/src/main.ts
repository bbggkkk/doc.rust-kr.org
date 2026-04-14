import * as net from "net";

function main() {
  const server = net.createServer((socket) => {
    console.log("Connection established!");
  });

  server.listen(7878, "127.0.0.1");
}

main();
