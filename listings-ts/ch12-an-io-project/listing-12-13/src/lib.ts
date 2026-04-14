import * as fs from "fs";

export interface Config {
  query: string;
  filePath: string;
}

// pub fn build → export function
export function buildConfig(args: string[]): Config {
  // --생략--
  if (args.length < 4) {
    throw new Error("not enough arguments");
  }
  const query = args[2];
  const filePath = args[3];
  return { query, filePath };
}

export function run(config: Config): void {
  // --생략--
  const contents = fs.readFileSync(config.filePath, "utf8");
  console.log(`With text:\n${contents}`);
}
