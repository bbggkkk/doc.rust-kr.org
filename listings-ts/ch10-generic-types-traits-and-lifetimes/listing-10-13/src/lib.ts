interface Summary {
    summarize(): string;
}

// impl Summary for NewsArticle -> class implements interface
class NewsArticle implements Summary {
    headline: string;
    location: string;
    author: string;
    content: string;

    constructor(headline: string, location: string, author: string, content: string) {
        this.headline = headline;
        this.location = location;
        this.author = author;
        this.content = content;
    }

    summarize(): string {
        return `${this.headline}, by ${this.author} (${this.location})`;
    }
}

// impl Summary for Tweet -> class implements interface
class Tweet implements Summary {
    username: string;
    content: string;
    reply: boolean;
    retweet: boolean;

    constructor(username: string, content: string, reply: boolean, retweet: boolean) {
        this.username = username;
        this.content = content;
        this.reply = reply;
        this.retweet = retweet;
    }

    summarize(): string {
        return `${this.username}: ${this.content}`;
    }
}
