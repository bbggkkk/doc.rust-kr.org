// Rust의 impl Summary for NewsArticle → JS에서는 클래스에 메서드를 직접 정의합니다
class NewsArticle {
    constructor(headline, location, author, content) {
        this.headline = headline;
        this.location = location;
        this.author = author;
        this.content = content;
    }

    // trait 구현 → 클래스 메서드 정의
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
