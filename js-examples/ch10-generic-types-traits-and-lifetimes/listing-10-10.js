// Rust의 impl Point<f32>는 특정 타입에만 메서드를 추가합니다
// JS에서는 런타임에 타입을 검사하여 비슷하게 구현할 수 있습니다
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceFromOrigin() {
        // Rust에서는 f32 타입에만 이 메서드가 존재하지만,
        // JS에서는 런타임에 숫자인지 확인해야 합니다
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}
