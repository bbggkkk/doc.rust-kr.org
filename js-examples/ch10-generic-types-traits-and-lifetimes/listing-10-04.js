// JS는 동적 타입이므로 타입별 함수를 만들 필요가 없습니다
// 하나의 함수로 숫자, 문자열 등 비교 가능한 모든 타입에 동작합니다
function largest(list) {
    let largest = list[0];
    for (const item of list) {
        if (item > largest) {
            largest = item;
        }
    }
    return largest;
}

const numberList = [34, 50, 25, 100, 65];
console.log(`The largest number is ${largest(numberList)}`);

const charList = ['y', 'm', 'a', 'q'];
console.log(`The largest char is ${largest(charList)}`);
