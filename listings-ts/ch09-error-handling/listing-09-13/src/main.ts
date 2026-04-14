// Guess 구조체 -> 클래스로 유효성 검사 캡슐화
class Guess {
    private _value: number;

    constructor(value: number) {
        if (value < 1 || value > 100) {
            // panic! -> throw
            throw new Error(
                `Guess value must be between 1 and 100, got ${value}.`
            );
        }
        this._value = value;
    }

    // getter 메서드 (비공개 필드 접근)
    get value(): number {
        return this._value;
    }
}
