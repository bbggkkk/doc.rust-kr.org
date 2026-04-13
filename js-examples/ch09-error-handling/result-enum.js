// Rust의 Result<T, E>는 성공/실패를 타입으로 표현
// JS에는 대응하는 타입이 없고, try/catch 또는 Promise로 에러를 처리함
// 직접 구현한다면:
class Result {
    constructor(ok, err) {
        this.ok = ok;
        this.err = err;
    }
    static Ok(value) { return new Result(value, null); }
    static Err(error) { return new Result(null, error); }
    isOk() { return this.err === null; }
}

// 하지만 실제 JS에서는 그냥 try/catch를 사용
try {
    const value = riskyOperation(); // Ok(T)에 해당
} catch (e) {
    // Err(E)에 해당
}
