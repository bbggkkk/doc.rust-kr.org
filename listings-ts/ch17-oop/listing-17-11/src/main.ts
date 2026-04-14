const post = new Post();

post.addText("I ate a salad for lunch today");
console.assert(post.content() === "");

post.requestReview();
console.assert(post.content() === "");

post.approve();
console.assert(post.content() === "I ate a salad for lunch today");
