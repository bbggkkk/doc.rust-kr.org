let post = Post.new();

post.addText("I ate a salad for lunch today");

// 타입이 변환됨: DraftPost → PendingReviewPost → Post
const pendingPost = post.requestReview();
const publishedPost = pendingPost.approve();

console.assert(publishedPost.content() === "I ate a salad for lunch today");
