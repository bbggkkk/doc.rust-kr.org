// impl Summary for Tweet -> summarize_author만 구현
class Tweet extends SummaryBase {
    username: string;
    content: string;
    reply: boolean;
    retweet: boolean;

    constructor(username: string, content: string, reply: boolean, retweet: boolean) {
        super();
        this.username = username;
        this.content = content;
        this.reply = reply;
        this.retweet = retweet;
    }

    // summarize_author만 구현하면 summarize는 기본 구현 사용
    summarizeAuthor(): string {
        return `@${this.username}`;
    }
}
