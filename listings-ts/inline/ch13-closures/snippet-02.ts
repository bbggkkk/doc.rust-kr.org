// Rust 함수와 클로저 문법 비교:
// fn  add_one_v1   (x: u32) -> u32 { x + 1 }
// let add_one_v2 = |x: u32| -> u32 { x + 1 };
// let add_one_v3 = |x|             { x + 1 };
// let add_one_v4 = |x|               x + 1  ;

// TypeScript에서의 대응:
function addOneV1(x: number): number { return x + 1; }          // 함수 선언
const addOneV2 = (x: number): number => { return x + 1; };      // 타입 명시
const addOneV3 = (x: number) => { return x + 1; };              // 반환 타입 추론
const addOneV4 = (x: number) => x + 1;                          // 간결한 표현
