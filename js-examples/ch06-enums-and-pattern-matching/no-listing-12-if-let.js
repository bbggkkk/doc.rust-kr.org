// Rust의 if let Some(max) = config_max → JS에서는 null 체크 후 값 사용
// if let은 한 가지 패턴만 간결하게 처리하는 문법 설탕
const configMax = 3;
if (configMax !== null && configMax !== undefined) {
    const max = configMax;
    console.log(`The maximum is configured to be ${max}`);
}
