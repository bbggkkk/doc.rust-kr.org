const v = [1, 2, 3, 4, 5];

// &v[2] -> arr[2] (JS는 범위 초과 시 panic 대신 undefined 반환)
const third = v[2];
console.log(`The third element is ${third}`);

// v.get(2) -> arr.at(2) (at()도 범위 초과 시 undefined 반환)
const thirdAlt = v.at(2);
if (thirdAlt !== undefined) {
    console.log(`The third element is ${thirdAlt}`);
} else {
    console.log("There is no third element.");
}
