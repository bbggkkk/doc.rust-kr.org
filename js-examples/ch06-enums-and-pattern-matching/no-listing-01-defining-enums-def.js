// Rust의 enum은 고정된 배리언트 집합 → JS에서는 Object.freeze로 불변 객체 생성
const IpAddrKind = Object.freeze({
    V4: 'V4',
    V6: 'V6',
});
