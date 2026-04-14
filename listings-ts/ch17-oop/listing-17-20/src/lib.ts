class DraftPost {
  // --생략--
  _content: string = "";

  addText(text: string): void {
    this._content += text;
  }

  // 다른 타입으로 전환
  requestReview(): PendingReviewPost {
    return new PendingReviewPost(this._content);
  }
}

class PendingReviewPost {
  private _content: string;

  constructor(content: string) {
    this._content = content;
  }

  approve(): Post {
    return new Post(this._content);
  }
}
