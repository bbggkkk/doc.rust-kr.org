class Config {
  query: string;
  filePath: string;

  private constructor(query: string, filePath: string) {
    this.query = query;
    this.filePath = filePath;
  }

  // Result<Config, &'static str> → Config | Error
  static build(args: string[]): Config {
    if (args.length < 4) {
      throw new Error("not enough arguments"); // Err(...)
    }

    const query = args[2];
    const filePath = args[3];

    return new Config(query, filePath); // Ok(Config { ... })
  }
}
