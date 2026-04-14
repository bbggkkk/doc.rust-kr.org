import * as fs from "fs";

function main() {
  // --생략--

  console.log(`Searching for ${config.query}`);
  console.log(`In file ${config.filePath}`);

  run(config);
}

function run(config: Config): void {
  const contents = fs.readFileSync(config.filePath, "utf8");

  console.log(`With text:\n${contents}`);
}

// --생략--
