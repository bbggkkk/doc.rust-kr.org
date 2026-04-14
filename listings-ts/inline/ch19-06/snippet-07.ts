// 함수형 매크로: Rust의 sql!(SELECT * FROM posts WHERE id=1)
// 컴파일 타임에 SQL을 파싱하고 검증 — TS에는 동등한 기능 없음
// TS에서 가장 유사한 것: tagged template literal

// Rust: let sql = sql!(SELECT * FROM posts WHERE id=1);
// TS: tagged template literal로 유사하게 표현
function sql(strings: TemplateStringsArray, ...values: any[]): string {
  // SQL 파싱 및 검증 로직 (런타임에 수행)
  return strings.join("?");
}

const query = sql`SELECT * FROM posts WHERE id=${1}`;
