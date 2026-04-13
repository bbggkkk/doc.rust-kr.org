// search 함수의 루프 기반 구현 (예제 12-19 재현)
// Rust에서는 가변 벡터에 push하는 방식입니다.

function search(query, contents) {
  const results = [];
  for (const line of contents.split("\n")) {
    if (line.includes(query)) {
      results.push(line);
    }
  }
  return results;
}
