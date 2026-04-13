// Rust의 타입 기반 상태 전환 (DraftPost → PendingReviewPost → Post)
// JS에서는 타입 시스템이 없어 상태를 런타임에 관리합니다.

class DraftPost {
  #content = "";

  addText(text) {
    this.#content += text;
  }

  requestReview() {
    return new PendingReviewPost(this.#content);
  }
}

class PendingReviewPost {
  #content;

  constructor(content) {
    this.#content = content;
  }

  approve() {
    return new Post(this.#content);
  }
}

class Post {
  #content;

  constructor(content) {
    this.#content = content;
  }

  static new() {
    return new DraftPost();
  }

  content() {
    return this.#content;
  }
}
