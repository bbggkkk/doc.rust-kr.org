// Rust의 add_text 메서드 → JS 버전

class Post {
  #state;
  #content = "";

  constructor() {
    this.#state = new Draft();
  }

  addText(text) {
    this.#content += text;
  }
}
