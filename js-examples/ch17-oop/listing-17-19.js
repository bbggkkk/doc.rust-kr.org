// Rust의 타입으로 상태 인코딩 → JS에서는 타입 시스템이 없으므로
// 클래스 체이닝으로 유사한 패턴을 구현합니다.

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

class DraftPost {
  #content = "";

  addText(text) {
    this.#content += text;
  }

  requestReview() {
    return new PendingReviewPost(this.#content);
  }
  // content() 메서드가 없음 — 초안에서는 내용 접근 불가
}

class PendingReviewPost {
  #content;
  constructor(content) {
    this.#content = content;
  }

  approve() {
    return new Post(this.#content);
  }
  // content() 메서드가 없음 — 검토 중에는 내용 접근 불가
}

// 사용 예시
let post = Post.new();
post.addText("I ate a salad for lunch today");
const review = post.requestReview();
const published = review.approve();
console.log(published.content()); // "I ate a salad for lunch today"
