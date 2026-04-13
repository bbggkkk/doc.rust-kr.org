// Rust의 approve 메서드 + Published 상태 → JS 버전

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

  approve() {
    this.#state = this.#state.approve();
  }
}

class Draft {
  requestReview() {
    return new PendingReview();
  }
  approve() {
    return this; // 초안에서 바로 승인 불가
  }
}

class PendingReview {
  requestReview() {
    return this;
  }
  approve() {
    return new Published();
  }
}

class Published {
  requestReview() {
    return this;
  }
  approve() {
    return this;
  }
}
