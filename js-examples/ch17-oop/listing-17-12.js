// Rust의 상태 패턴 (State 트레이트 + 상태 객체) → JS의 클래스 기반 상태 패턴

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
    return this.#state.content(this.#content);
  }

  requestReview() {
    this.#state = this.#state.requestReview();
  }

  approve() {
    this.#state = this.#state.approve();
  }
}

class Draft {
  content() {
    return "";
  }
  requestReview() {
    return new PendingReview();
  }
  approve() {
    return this; // 초안에서 바로 승인 불가
  }
}

class PendingReview {
  content() {
    return "";
  }
  requestReview() {
    return this;
  }
  approve() {
    return new Published();
  }
}

class Published {
  content(postContent) {
    return postContent;
  }
  requestReview() {
    return this;
  }
  approve() {
    return this;
  }
}
