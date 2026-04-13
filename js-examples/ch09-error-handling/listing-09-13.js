// Rust: 커스텀 타입 + panic!으로 유효성 보장
// JS: 클래스 생성자에서 throw로 유사하게 구현
class Guess {
    #value; // private 필드 (Rust의 비공개 필드에 해당)

    constructor(value) {
        if (value < 1 || value > 100) {
            // panic!에 해당 — 유효하지 않은 값이면 예외 발생
            throw new RangeError(
                `Guess value must be between 1 and 100, got ${value}.`
            );
        }
        this.#value = value;
    }

    // getter 메서드 (Rust의 pub fn value(&self)에 해당)
    get value() {
        return this.#value;
    }
}
