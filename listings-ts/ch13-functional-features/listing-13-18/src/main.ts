// Rust: let config = Config::build(env::args()).unwrap_or_else(|err| { ... });
// env::args()가 반복자를 반환 → 벡터로 모으지 않고 직접 전달
// JS에서는 process.argv가 이미 배열이므로 차이 없음
const args = process.argv; // 이터레이터 대신 배열

try {
  const config = Config.build(args);
  // --생략--
} catch (err) {
  console.error(`Problem parsing arguments: ${err}`);
  process.exit(1);
}
