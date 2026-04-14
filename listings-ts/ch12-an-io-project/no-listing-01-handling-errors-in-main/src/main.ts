function main() {
  // --생략--

  console.log(`Searching for ${config.query}`);
  console.log(`In file ${config.filePath}`);

  // if let Err(e) = run(config) → try-catch
  try {
    run(config);
  } catch (e) {
    console.log(`Application error: ${(e as Error).message}`);
    process.exit(1);
  }
}
