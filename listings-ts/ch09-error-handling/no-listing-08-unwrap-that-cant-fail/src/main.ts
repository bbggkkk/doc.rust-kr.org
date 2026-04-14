// IpAddr 파싱에 expect 사용 -> 하드코딩된 값이므로 실패할 리 없음
const home: string = "127.0.0.1";
// Rust: "127.0.0.1".parse().expect("Hardcoded IP address should be valid")
// TS에서는 문자열이 곧 값이므로 파싱 불필요
// 만약 검증이 필요하다면:
const parsed = home.match(/^\d+\.\d+\.\d+\.\d+$/)
    ?? (() => { throw new Error("Hardcoded IP address should be valid"); })();
