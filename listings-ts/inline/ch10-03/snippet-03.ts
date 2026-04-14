// let s: &'static str = "I have a static lifetime.";
// 'static: 프로그램 전체 수명동안 유효
// TS에서는 문자열 리터럴이 항상 GC에 의해 관리됨
const s: string = "I have a static lifetime.";
