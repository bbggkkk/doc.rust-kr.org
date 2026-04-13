// Rust의 if let + else → JS의 if-else로 태그된 객체 분기 처리
let count = 0;
if (coin.type === 'Quarter') {
    // Rust의 if let Coin::Quarter(state) = coin → JS에서는 타입 체크 + 속성 접근
    console.log(`State quarter from ${coin.state}!`);
} else {
    count += 1;
}
