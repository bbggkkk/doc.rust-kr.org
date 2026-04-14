import * as http from "http";

// handleConnection 부분만
function handleConnection(
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  // 요청 데이터를 읽고 (여기서는 생략)

  const response = "HTTP/1.1 200 OK\r\n\r\n";

  res.writeHead(200);
  res.end();
}
