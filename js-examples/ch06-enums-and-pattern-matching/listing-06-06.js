// Rust의 match + Option에서 Some만 처리 → JS에서는 null 체크
const configMax = 3; // Some(3u8)에 대응, None이면 null
if (configMax !== null) {
    console.log(`The maximum is configured to be ${configMax}`);
}
