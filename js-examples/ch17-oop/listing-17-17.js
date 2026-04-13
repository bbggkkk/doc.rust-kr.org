// Rust의 content()가 State에 위임 → JS에서는 컴파일 에러가 아닌 런타임 동작

class Post {
  #state;
  #content = "";

  constructor() {
    this.#state = new Draft();
  }

  addText(text) {
    this.#content += text;
  }

  content() {
    // 상태 객체에게 위임
    return this.#state.content(this.#content);
  }

  requestReview() {
    this.#state = this.#state.requestReview();
  }

  approve() {
    this.#state = this.#state.approve();
  }
}
