import * as http from "http";

function main() {
  const server = http.createServer((req, res) => {
    handleConnection(req);
  });

  server.listen(7878, "127.0.0.1");
}

function handleConnection(req: http.IncomingMessage) {
  const httpRequest: string[] = [];
  httpRequest.push(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  for (const [key, value] of Object.entries(req.headers)) {
    httpRequest.push(`${key}: ${value}`);
  }

  console.log("Request:", httpRequest);
}

main();
