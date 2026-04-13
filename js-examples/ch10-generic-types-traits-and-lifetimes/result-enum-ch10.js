// Rust의 Result<T, E> 열거형 — JS에는 동일한 개념이 없습니다.
// JS에서는 try/catch로 에러를 처리합니다.
// 다만 객체로 비슷하게 흉내낼 수 있습니다:
class Result {
    constructor(ok, err) {
        this.ok = ok;
        this.err = err;
    }
    static Ok(value) { return new Result(value, null); }
    static Err(error) { return new Result(null, error); }
}
