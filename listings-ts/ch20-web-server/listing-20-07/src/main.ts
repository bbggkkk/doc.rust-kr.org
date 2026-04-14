import * as http from "http";
import * as fs from "fs";

// --생략--

function handleConnection(
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const requestLine = `${req.method} ${req.url} HTTP/${req.httpVersion}`;

  if (requestLine === "GET / HTTP/1.1") {
    const contents = fs.readFileSync("hello.html", "utf-8");
    res.writeHead(200, { "Content-Length": contents.length });
    res.end(contents);
    // --생략--
  } else {
    const contents = fs.readFileSync("404.html", "utf-8");
    res.writeHead(404, { "Content-Length": contents.length });
    res.end(contents);
  }
}
