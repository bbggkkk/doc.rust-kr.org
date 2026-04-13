// Rust의 타입 기반 상태 전환 사용 예제 → JS 버전

let post = Post.new(); // DraftPost 반환

post.addText("I ate a salad for lunch today");

post = post.requestReview(); // PendingReviewPost 반환

post = post.approve(); // Post 반환

console.assert(post.content() === "I ate a salad for lunch today");
