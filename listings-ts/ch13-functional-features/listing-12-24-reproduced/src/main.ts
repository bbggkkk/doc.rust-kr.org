// Rust: let args: Vec<String> = env::args().collect();
// let config = Config::build(&args).unwrap_or_else(|err| { ... });
const args = process.argv; // Node.js의 프로세스 인수

try {
  const config = Config.build(args);
  // --생략--
} catch (err) {
  console.error(`Problem parsing arguments: ${err}`);
  process.exit(1);
}
