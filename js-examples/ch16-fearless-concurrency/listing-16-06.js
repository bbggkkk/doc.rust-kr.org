// Rust의 mpsc 채널 → JS에서는 직접적인 대응이 없지만,
// 간단한 이벤트 기반 패턴으로 유사하게 구현할 수 있습니다.

class Channel {
  #queue = [];
  #resolve = null;

  send(value) {
    if (this.#resolve) {
      this.#resolve(value);
      this.#resolve = null;
    } else {
      this.#queue.push(value);
    }
  }

  async recv() {
    if (this.#queue.length > 0) {
      return this.#queue.shift();
    }
    return new Promise((resolve) => {
      this.#resolve = resolve;
    });
  }
}

const channel = new Channel();
// tx (송신자)와 rx (수신자) 역할을 하나의 객체로 표현
