// 라이프타임: 메서드에서의 라이프타임 명시
// TS/JS에서는 GC가 메모리를 관리하므로 불필요

class ImportantExcerpt {
    constructor(public part: string) {}

    level(): number {
        return 3;
    }
}
