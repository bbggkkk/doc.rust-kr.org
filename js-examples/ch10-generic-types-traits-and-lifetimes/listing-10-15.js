// Rust의 트레이트 바운드 조건부 구현 → JS에서는 런타임 타입 검사로 대체합니다
class Pair {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Rust에서는 Display + PartialOrd를 구현한 타입에만 이 메서드가 존재합니다
    // JS에서는 비교 연산자가 동작하는 타입이면 사용할 수 있습니다
    cmpDisplay() {
        if (this.x >= this.y) {
            console.log(`The largest member is x = ${this.x}`);
        } else {
            console.log(`The largest member is y = ${this.y}`);
        }
    }
}
