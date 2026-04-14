function searchCaseInsensitive(
  query: string,
  contents: string
): string[] {
  const lowerQuery = query.toLowerCase();
  const results: string[] = [];

  for (const line of contents.split("\n")) {
    if (line.toLowerCase().includes(lowerQuery)) {
      results.push(line);
    }
  }

  return results;
}
