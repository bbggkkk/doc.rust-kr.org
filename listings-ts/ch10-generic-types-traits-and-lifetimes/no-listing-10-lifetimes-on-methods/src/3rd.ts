// 세 번째 라이프타임 생략 규칙: &self가 있으면 반환값에 self의 라이프타임 적용
// TS/JS에서는 라이프타임 개념 없음

class ImportantExcerpt {
    constructor(public part: string) {}

    announceAndReturnPart(announcement: string): string {
        console.log(`Attention please: ${announcement}`);
        return this.part;
    }
}
