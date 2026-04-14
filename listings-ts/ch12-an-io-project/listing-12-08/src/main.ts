class Config {
  query: string;
  filePath: string;

  // --생략--
  constructor(args: string[]) {
    if (args.length < 4) {
      // panic!("not enough arguments") → throw
      throw new Error("not enough arguments");
    }
    // --생략--
    this.query = args[2];
    this.filePath = args[3];
  }
}
