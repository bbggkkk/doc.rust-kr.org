// Rust의 블로그 게시물 API 사용 예제 → JS 버전

const post = new Post();

post.addText("I ate a salad for lunch today");
console.assert(post.content() === "");

post.requestReview();
console.assert(post.content() === "");

post.approve();
console.assert(post.content() === "I ate a salad for lunch today");
