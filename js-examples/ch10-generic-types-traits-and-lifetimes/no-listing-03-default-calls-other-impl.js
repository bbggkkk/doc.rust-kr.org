// Rust: impl Summary for Tweet { fn summarize_author... }
// JS: summarizeAuthor만 구현하면 summarize는 기본 구현이 호출됩니다.
class Summary {
    summarizeAuthor() {
        throw new Error("must implement");
    }
    summarize() {
        return `(Read more from ${this.summarizeAuthor()}...)`;
    }
}

class Tweet extends Summary {
    constructor(username, content) {
        super();
        this.username = username;
        this.content = content;
    }
    summarizeAuthor() {
        return `@${this.username}`;
    }
}
