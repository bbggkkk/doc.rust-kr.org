// use std::env → process.env
// --생략--

function buildConfig(args: string[]): Config {
  if (args.length < 4) {
    throw new Error("not enough arguments");
  }

  const query = args[2];
  const filePath = args[3];

  // env::var("IGNORE_CASE").is_ok() → process.env.IGNORE_CASE !== undefined
  const ignoreCase = process.env.IGNORE_CASE !== undefined;

  return { query, filePath, ignoreCase };
}
