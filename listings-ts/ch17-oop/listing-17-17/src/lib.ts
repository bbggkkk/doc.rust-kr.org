class Post {
  // --생략--

  content(): string {
    // state에게 위임
    return this.state!.content(this);
  }
  // --생략--
}
