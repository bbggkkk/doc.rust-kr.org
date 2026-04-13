// Rust의 트레이트 구현 → JS의 클래스 메서드 정의
class NewsArticle {
    constructor(headline, location, author, content) {
        this.headline = headline;
        this.location = location;
        this.author = author;
        this.content = content;
    }
    summarize() {
        return `${this.headline}, by ${this.author} (${this.location})`;
    }
}

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
