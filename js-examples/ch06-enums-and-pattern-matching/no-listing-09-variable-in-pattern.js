// Rust의 match에서 내부 값 바인딩 → JS에서는 switch + 구조분해 할당
function valueInCents(coin) {
    switch (coin.type) {
        case 'Penny':   return 1;
        case 'Nickel':  return 5;
        case 'Dime':    return 10;
        case 'Quarter':
            // Rust의 Coin::Quarter(state) 패턴 → JS에서는 속성 접근
            console.log(`State quarter from ${coin.state}!`);
            return 25;
    }
}
