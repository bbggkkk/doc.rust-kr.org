// Rust의 struct + enum 조합 → JS에서는 객체로 표현
const IpAddrKind = Object.freeze({ V4: 'V4', V6: 'V6' });

const home = {
    kind: IpAddrKind.V4,
    address: '127.0.0.1',
};

const loopback = {
    kind: IpAddrKind.V6,
    address: '::1',
};
