// Rust: 하드코딩된 값이라 실패할 수 없지만 Result를 처리해야 함
// JS: 파싱 실패 가능성이 없는 값이라도 타입 시스템이 강제하지 않음
const home = "127.0.0.1"; // JS에는 IpAddr 타입이 없어 그냥 문자열 사용

// 만약 유효성 검사가 필요하다면:
function parseIpAddr(str) {
    const parts = str.split(".");
    if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) {
        throw new Error("Hardcoded IP address should be valid");
    }
    return str;
}
const validated = parseIpAddr("127.0.0.1");
