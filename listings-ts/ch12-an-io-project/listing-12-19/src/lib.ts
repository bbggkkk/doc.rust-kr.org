// Rust: for 루프와 가변 벡터를 사용한 search 구현
function search(query: string, contents: string): string[] {
  const results: string[] = [];

  for (const line of contents.split("\n")) {
    if (line.includes(query)) {
      results.push(line);
    }
  }

  return results;
}
