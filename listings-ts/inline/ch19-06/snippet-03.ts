// 절차적 매크로: 컴파일 타임 코드 생성 (TS에는 동등한 기능 없음)
// Rust의 proc_macro는 TokenStream을 입력받아 TokenStream을 출력
// TS에서 가장 유사한 것은 코드 제네레이터나 빌드 타임 스크립트

// Rust:
// #[some_attribute]
// pub fn some_name(input: TokenStream) -> TokenStream { }

// TS: 비유적으로 표현하면 AST 변환 플러그인 (Babel, ts-morph 등)
