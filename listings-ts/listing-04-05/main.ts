function main() {
    const s1 = "hello"; // Rust: String::from("hello")

    // Rust에서 소유권을 돌려받기 위해 튜플로 반환해야 합니다
    // JS에서는 이런 번거로운 작업이 필요 없습니다 (GC 덕분)
    const [s2, len] = calculateLength(s1);

    console.log(`The length of '${s2}' is ${len}.`);
}

function calculateLength(s: string): [string, number] {
    const length = s.length;
    return [s, length]; // Rust: 소유권을 되돌려주기 위해 값도 함께 반환
    // JS에서는 참조로 전달되므로 이런 패턴이 불필요합니다
    // → 다음 절에서 배울 '참조자'가 이 문제를 해결합니다
}

main();
