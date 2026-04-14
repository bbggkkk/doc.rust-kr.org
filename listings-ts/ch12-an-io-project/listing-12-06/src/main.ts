import * as fs from "fs";

interface Config {
  query: string;
  filePath: string;
}

function main() {
  const args: string[] = process.argv;

  const config = parseConfig(args);

  console.log(`Searching for ${config.query}`);
  console.log(`In file ${config.filePath}`);

  const contents = fs.readFileSync(config.filePath, "utf8");

  // --생략--
}

function parseConfig(args: string[]): Config {
  const query = args[2];
  const filePath = args[3];
  return { query, filePath };
}

main();
