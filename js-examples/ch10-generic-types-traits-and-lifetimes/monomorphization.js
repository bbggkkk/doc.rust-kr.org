// Rust는 컴파일 시점에 제네릭을 구체 타입으로 변환합니다 (단형성화).
// Option<i32>는 Option_i32로, Option<f64>는 Option_f64로 변환됩니다.
// JS에서는 동적 타이핑이므로 이런 과정이 필요 없습니다.
const integer = 5;   // 그냥 Some(5)
const float = 5.0;   // 그냥 Some(5.0)

// JS에서는 타입 구분 없이 하나의 코드로 처리됩니다
function wrapSome(value) {
    return { some: value };
}
