// 트레이트 바운드를 사용해 조건부로 메서드 구현하기
class Pair<T> {
    x: T;
    y: T;

    constructor(x: T, y: T) {
        this.x = x;
        this.y = y;
    }
}

// impl<T: Display + PartialOrd> Pair<T> { cmp_display }
// TS에서는 조건부 메서드 구현이 불가능하므로, 런타임 검사로 대체
class ComparablePair<T extends { toString(): string }> extends Pair<T> {
    cmpDisplay(): void {
        if (this.x >= this.y) {
            console.log(`The largest member is x = ${this.x}`);
        } else {
            console.log(`The largest member is y = ${this.y}`);
        }
    }
}
