// use minigrep::Config → import
import { buildConfig, run, Config } from "./lib";

function main() {
  // --생략--
  const args: string[] = process.argv;

  let config: Config;
  try {
    config = buildConfig(args);
  } catch (err) {
    console.log(`Problem parsing arguments: ${(err as Error).message}`);
    process.exit(1);
  }

  // if let Err(e) = minigrep::run(config)
  try {
    run(config);
  } catch (e) {
    // --생략--
    console.log(`Application error: ${(e as Error).message}`);
    process.exit(1);
  }
}

main();
