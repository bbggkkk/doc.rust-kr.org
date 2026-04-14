import * as fs from "fs";

function run(config: Config): void {
  const contents = fs.readFileSync(config.filePath, "utf8");

  for (const line of search(config.query, contents)) {
    console.log(line); // println!("{line}")
  }
}
