const v = [1, 2, 3, 4, 5];

// 인덱스 접근 (범위 밖이면 undefined)
const third: number = v[2];
console.log(`The third element is ${third}`);

// .at() 메서드 사용 (Rust의 .get()과 유사하게 undefined 반환 가능)
const thirdOpt: number | undefined = v.at(2);
if (thirdOpt !== undefined) {
    console.log(`The third element is ${thirdOpt}`);
} else {
    console.log("There is no third element.");
}
