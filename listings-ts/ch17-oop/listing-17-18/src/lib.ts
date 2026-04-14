interface State {
  // --생략--

  // 기본 구현: 빈 문자열 반환
  content(post: Post): string;
}

// --생략--

class Published implements State {
  // --생략--

  // 오버라이딩: 게시물의 콘텐츠를 반환
  content(post: Post): string {
    return post._content;
  }
}
