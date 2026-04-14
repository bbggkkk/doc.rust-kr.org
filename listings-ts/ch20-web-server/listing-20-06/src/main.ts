import * as http from "http";
import * as fs from "fs";

// --생략--

function handleConnection(
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const requestLine = `${req.method} ${req.url} HTTP/${req.httpVersion}`;

  if (requestLine === "GET / HTTP/1.1") {
    const statusLine = "HTTP/1.1 200 OK";
    const contents = fs.readFileSync("hello.html", "utf-8");
    const length = contents.length;

    res.writeHead(200, { "Content-Length": length });
    res.end(contents);
  } else {
    // some other request
  }
}
