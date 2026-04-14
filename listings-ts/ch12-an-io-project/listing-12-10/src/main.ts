function main() {
  const args: string[] = process.argv;

  // unwrap_or_else → try-catch
  let config: Config;
  try {
    config = Config.build(args);
  } catch (err) {
    console.log(`Problem parsing arguments: ${(err as Error).message}`);
    process.exit(1); // process::exit(1)
  }

  // --생략--
}

main();
