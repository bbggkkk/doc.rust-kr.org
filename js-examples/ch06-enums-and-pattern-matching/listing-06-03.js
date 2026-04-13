// Rust의 enum + match → JS에서는 문자열 상수 + switch 문
const Coin = Object.freeze({
    Penny: 'Penny',
    Nickel: 'Nickel',
    Dime: 'Dime',
    Quarter: 'Quarter',
});

function valueInCents(coin) {
    switch (coin) {
        case Coin.Penny:   return 1;
        case Coin.Nickel:  return 5;
        case Coin.Dime:    return 10;
        case Coin.Quarter: return 25;
    }
}
