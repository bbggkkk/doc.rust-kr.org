interface Config {
  query: string;
  filePath: string;
  ignoreCase: boolean; // pub ignore_case: bool
}

function run(config: Config): void {
  const contents = fs.readFileSync(config.filePath, "utf8");

  // config.ignore_case에 따라 분기
  const results = config.ignoreCase
    ? searchCaseInsensitive(config.query, contents)
    : search(config.query, contents);

  for (const line of results) {
    console.log(line);
  }
}
