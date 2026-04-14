function search(query: string, contents: string): string[] {
  for (const line of contents.split("\n")) {
    if (line.includes(query)) {
      // do something with line
    }
  }
  return []; // 아직 미완성
}
