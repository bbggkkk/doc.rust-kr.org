import { buildConfig, run } from "./lib";

function main() {
  const args: string[] = process.argv;

  let config;
  try {
    config = buildConfig(args);
  } catch (err) {
    // eprintln! → console.error
    console.error(`Problem parsing arguments: ${(err as Error).message}`);
    process.exit(1);
  }

  try {
    run(config);
  } catch (e) {
    console.error(`Application error: ${(e as Error).message}`);
    process.exit(1);
  }
}

main();
