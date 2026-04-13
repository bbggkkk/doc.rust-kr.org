// Rust에서 두 개의 함수(largest_i32, largest_char)를 따로 만든 것처럼
// JS에서도 타입별 함수를 만들 수 있지만,
// 동적 타이핑 덕분에 하나의 함수로 충분합니다.
function largestNumber(list) {
    let largest = list[0];
    for (const item of list) {
        if (item > largest) {
            largest = item;
        }
    }
    return largest;
}

const numberList = [34, 50, 25, 100, 65];
console.log(`The largest number is ${largestNumber(numberList)}`);

const charList = ["y", "m", "a", "q"];
console.log(`The largest char is ${largestNumber(charList)}`);
