// Rust의 타입 인코딩 접근법의 main 코드 부분 → JS에서는
// 타입 시스템 없이 같은 API를 사용합니다.

const post = new Post();

post.addText("I ate a salad for lunch today");
// Rust에서는 DraftPost에 content()가 없어 호출 자체가 컴파일 에러
// JS에서는 이런 제약이 없습니다
