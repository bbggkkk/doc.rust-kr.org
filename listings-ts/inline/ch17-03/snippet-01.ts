let post = Post.new(); // DraftPost 반환

post.addText("I ate a salad for lunch today");
console.assert(post.content() === ""); // 초안 — 내용 없음
