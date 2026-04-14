// 속성형 매크로 정의 시그니처:
// Rust: pub fn route(attr: TokenStream, item: TokenStream) -> TokenStream
// 첫 번째 TokenStream = 속성 내용 (GET, "/")
// 두 번째 TokenStream = 연결된 아이템 본문 (fn index() { })
// TS에는 동등한 기능 없음 — 데코레이터 팩토리가 가장 유사
