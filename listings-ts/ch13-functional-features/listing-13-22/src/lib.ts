// Rust: contents.lines().filter(|line| line.contains(query)).collect()
// 반복자 어댑터를 사용한 간결한 구현
function search(query: string, contents: string): string[] {
  // .lines()    → .split("\n")
  // .filter()   → .filter()
  // .collect()  → JS의 .filter()가 이미 배열을 반환
  return contents
    .split("\n")
    .filter((line) => line.includes(query));
}
