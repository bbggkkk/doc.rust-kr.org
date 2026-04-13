// Rust의 State 트레이트에 content 기본 구현 + Published 오버라이드 → JS 버전

class Draft {
  content() {
    return "";
  }
  requestReview() {
    return new PendingReview();
  }
  approve() {
    return this;
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
    return postContent; // 게시된 상태에서만 콘텐츠 반환
  }
  requestReview() {
    return this;
  }
  approve() {
    return this;
  }
}
