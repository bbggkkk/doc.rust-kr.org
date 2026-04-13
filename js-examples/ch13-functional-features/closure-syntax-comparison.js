// Rust의 네 가지 클로저 문법 vs JS 화살표 함수
function addOneV1(x) { return x + 1; }       // 함수 선언
const addOneV2 = (x) => { return x + 1; };   // 화살표 함수 (블록 본문)
const addOneV3 = (x) => x + 1;               // 화살표 함수 (표현식 본문)
// Rust와 달리 JS는 타입 명시가 없으므로 v2~v4 구분이 크지 않음
