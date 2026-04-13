// 트레이트 메서드 호출 → JS의 메서드 호출
class Tweet {
    constructor(username, content, reply, retweet) {
        this.username = username;
        this.content = content;
        this.reply = reply;
        this.retweet = retweet;
    }
    summarize() {
        return `${this.username}: ${this.content}`;
    }
}

const tweet = new Tweet(
    "horse_ebooks",
    "of course, as you probably already know, people",
    false,
    false
);

console.log(`1 new tweet: ${tweet.summarize()}`);
