// Config 구조체 → JavaScript 클래스
class Config {
  constructor(args) {
    if (args.length < 4) {
      throw new Error('not enough arguments');
    }
    this.query = args[2];
    this.filePath = args[3];
  }
}

const config = new Config(process.argv);
console.log(`Searching for: ${config.query}`);
console.log(`In file: ${config.filePath}`);
