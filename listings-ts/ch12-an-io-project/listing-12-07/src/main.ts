import * as fs from "fs";

class Config {
  query: string;
  filePath: string;

  constructor(args: string[]) {
    this.query = args[2];
    this.filePath = args[3];
  }
}

function main() {
  const args: string[] = process.argv;

  const config = new Config(args);

  // --생략--
}

main();
