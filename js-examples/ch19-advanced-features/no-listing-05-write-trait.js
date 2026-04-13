// Rust: Write 트레이트의 함수 시그니처
// JavaScript에서는 Node.js의 Writable 스트림으로 표현합니다

const { Writable } = require("stream");

class MyWriter extends Writable {
  _write(chunk, encoding, callback) {
    try {
      process.stdout.write(chunk);
      callback();
    } catch (err) {
      callback(err);
    }
  }
}
