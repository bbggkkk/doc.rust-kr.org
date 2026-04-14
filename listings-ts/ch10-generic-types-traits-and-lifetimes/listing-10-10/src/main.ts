// impl Point<f32> -> 특정 타입에만 메서드 정의
// TS에서는 타입별 메서드 분기를 직접 구현해야 함
class PointF32 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distanceFromOrigin(): number {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}
