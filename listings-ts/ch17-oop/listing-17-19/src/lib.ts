// 상태를 타입으로 인코딩하기
class Post {
  private _content: string;

  private constructor(content: string) {
    this._content = content;
  }

  // Post::new → DraftPost를 반환
  static new(): DraftPost {
    return new DraftPost();
  }

  content(): string {
    return this._content;
  }
}

class DraftPost {
  _content: string = "";

  addText(text: string): void {
    this._content += text;
  }
  // content() 메서드가 없음 — 초안은 내용을 읽을 수 없음
}
