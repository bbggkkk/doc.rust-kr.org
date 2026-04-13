// Rust의 배리언트에 데이터 포함 → JS에서는 태그된 객체로 표현
const UsState = Object.freeze({
    Alabama: 'Alabama',
    Alaska: 'Alaska',
    // --생략--
});

// Quarter만 UsState 데이터를 가짐
const Coin = {
    Penny:   () => ({ type: 'Penny' }),
    Nickel:  () => ({ type: 'Nickel' }),
    Dime:    () => ({ type: 'Dime' }),
    Quarter: (state) => ({ type: 'Quarter', state }),
};
