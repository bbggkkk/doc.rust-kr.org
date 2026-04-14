import * as fs from "fs";

// --생략--

// Result<(), Box<dyn Error>> → void (예외를 throw)
function run(config: Config): void {
  // fs::read_to_string(path)? → try-catch 또는 직접 호출
  const contents = fs.readFileSync(config.filePath, "utf8");

  console.log(`With text:\n${contents}`);

  // Ok(()) → 정상 리턴 (void)
}
