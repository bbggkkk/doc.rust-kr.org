import * as http from "http";
import * as fs from "fs";

// --생략--

function handleConnection(
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  // --생략--
  const requestLine = `${req.method} ${req.url} HTTP/${req.httpVersion}`;

  const [statusCode, filename] =
    requestLine === "GET / HTTP/1.1"
      ? [200, "hello.html"]
      : [404, "404.html"];

  const contents = fs.readFileSync(filename, "utf-8");
  const length = contents.length;

  res.writeHead(statusCode, { "Content-Length": length });
  res.end(contents);
}
