// Rust는 범위를 벗어난 인덱스 접근 시 panic (프로그램 종료)
// JS는 undefined를 반환할 뿐 에러를 발생시키지 않음 — 이것이 핵심 차이점
const v = [1, 2, 3];
console.log(v[99]); // undefined (에러 없음!)

// Rust처럼 안전하게 하려면 명시적 검사가 필요
function safeAccess(arr, index) {
    if (index >= arr.length) {
        throw new RangeError(`index out of bounds: the len is ${arr.length} but the index is ${index}`);
    }
    return arr[index];
}
