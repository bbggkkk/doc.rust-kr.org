// 기본 구현의 summarize가 summarizeAuthor를 호출하는 예시
class Summary {
    summarizeAuthor() { throw new Error("must implement"); }
    summarize() { return `(Read more from ${this.summarizeAuthor()}...)`; }
}

class Tweet extends Summary {
    constructor(username, content) {
        super();
        this.username = username;
        this.content = content;
    }
    summarizeAuthor() { return `@${this.username}`; }
}

const tweet = new Tweet(
    "horse_ebooks",
    "of course, as you probably already know, people"
);

console.log(`1 new tweet: ${tweet.summarize()}`);
// 출력: 1 new tweet: (Read more from @horse_ebooks...)
