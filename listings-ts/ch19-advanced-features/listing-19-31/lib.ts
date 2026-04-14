// 절차적 매크로 정의: 컴파일 타임 코드 생성 (TS에는 동등한 기능 없음)
// Rust의 proc_macro는 소스 코드를 AST로 파싱하여 새 코드를 생성

// Rust:
// #[proc_macro_derive(HelloMacro)]
// pub fn hello_macro_derive(input: TokenStream) -> TokenStream {
//   let ast = syn::parse(input).unwrap();
//   impl_hello_macro(&ast)
// }

// TS에서 가장 유사한 패턴: Babel/TypeScript 컴파일러 플러그인
// 또는 ts-morph를 사용한 코드 생성 스크립트
