import * as fs from "fs";

function main() {
  const args: string[] = process.argv;

  const [query, filePath] = parseConfig(args);

  // --생략--
}

function parseConfig(args: string[]): [string, string] {
  const query = args[2];
  const filePath = args[3];
  return [query, filePath];
}

main();
