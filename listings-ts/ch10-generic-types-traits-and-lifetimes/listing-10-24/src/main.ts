// 라이프타임: TS/JS에서는 GC가 메모리를 관리하므로 라이프타임이 불필요
// Rust의 라이프타임은 참조자의 유효 범위를 컴파일러에게 알려줌

interface ImportantExcerpt {
    // 라이프타임 'a: part가 참조하는 데이터보다 오래 살 수 없음
    part: string;
}

function main() {
    const novel = "Call me Ishmael. Some years ago...";
    const firstSentence = novel.split('.')[0]!;
    const i: ImportantExcerpt = {
        part: firstSentence,
    };
}

main();
