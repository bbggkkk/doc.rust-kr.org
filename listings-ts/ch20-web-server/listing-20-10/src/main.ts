import * as http from "http";
import * as fs from "fs";
// --생략--

function handleConnection(
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  // --생략--

  const url = req.url ?? "/";
  let statusCode: number;
  let filename: string;

  switch (url) {
    case "/":
      statusCode = 200;
      filename = "hello.html";
      break;
    case "/sleep":
      // 5초 동안 블로킹 (시뮬레이션)
      const start = Date.now();
      while (Date.now() - start < 5000) {} // busy-wait로 블로킹 시뮬레이션
      statusCode = 200;
      filename = "hello.html";
      break;
    default:
      statusCode = 404;
      filename = "404.html";
      break;
  }

  // --생략--
  const contents = fs.readFileSync(filename, "utf-8");
  res.writeHead(statusCode, { "Content-Length": contents.length });
  res.end(contents);
}
