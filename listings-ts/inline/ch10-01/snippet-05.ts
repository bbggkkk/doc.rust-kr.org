// 단형성화된 코드: 제네릭이 구체 타입으로 대체된 결과
// Rust에서는 컴파일 타임에 아래처럼 변환됨
// TS에서는 런타임에 타입이 지워지므로 이 과정이 없음

type Option_number = { tag: "Some"; value: number } | { tag: "None" };
type Option_float = { tag: "Some"; value: number } | { tag: "None" };

const integer: Option_number = { tag: "Some", value: 5 };
const float: Option_float = { tag: "Some", value: 5.0 };
