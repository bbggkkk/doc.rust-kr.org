// 제네릭 타입 매개변수 + 트레이트 바운드 + 라이프타임을 한 곳에 사용
// 라이프타임: 반환값이 x, y 중 짧은 수명과 동일

interface Displayable {
    toString(): string;
}

function longestWithAnAnnouncement<T extends Displayable>(
    // 라이프타임 'a: 반환값은 x, y 중 짧은 수명만큼 유효
    x: string,
    y: string,
    ann: T,
): string {
    console.log(`Announcement! ${ann.toString()}`);
    if (x.length > y.length) {
        return x;
    } else {
        return y;
    }
}
