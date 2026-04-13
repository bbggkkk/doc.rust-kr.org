// Rust의 content() 껍데기 구현 → JS 버전

class Post {
  #content = "";

  addText(text) {
    this.#content += text;
  }

  content() {
    return ""; // 항상 빈 문자열 반환 (아직 상태 로직 없음)
  }
}
