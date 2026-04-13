// Rust의 request_review 상태 전환 → JS 클래스 기반 상태 패턴

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
    return "";
  }

  requestReview() {
    this.#state = this.#state.requestReview();
  }
}

class Draft {
  requestReview() {
    return new PendingReview();
  }
}

class PendingReview {
  requestReview() {
    return this; // 이미 검토 대기 중이면 상태 유지
  }
}
