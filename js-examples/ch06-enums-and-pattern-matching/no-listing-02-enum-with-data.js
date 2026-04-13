// Rust enum에 데이터 포함 → JS에서는 태그된 객체(discriminated union)로 표현
// 배리언트 이름이 곧 생성자 함수 역할
const IpAddr = {
    V4: (address) => ({ type: 'V4', address }),
    V6: (address) => ({ type: 'V6', address }),
};

const home = IpAddr.V4('127.0.0.1');     // { type: 'V4', address: '127.0.0.1' }
const loopback = IpAddr.V6('::1');       // { type: 'V6', address: '::1' }
