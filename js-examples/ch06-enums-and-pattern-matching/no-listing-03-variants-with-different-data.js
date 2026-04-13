// Rust에서 각 배리언트가 다른 타입의 데이터를 가짐
// → JS에서는 생성자마다 다른 구조의 객체를 반환
const IpAddr = {
    V4: (a, b, c, d) => ({ type: 'V4', octets: [a, b, c, d] }),
    V6: (address) => ({ type: 'V6', address }),
};

const home = IpAddr.V4(127, 0, 0, 1);
const loopback = IpAddr.V6('::1');
