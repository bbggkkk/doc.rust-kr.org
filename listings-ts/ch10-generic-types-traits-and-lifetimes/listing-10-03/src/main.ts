// fn largest(list: &[i32]) -> &i32 -> function largest(list: number[]): number
function largest(list: number[]): number {
    let result = list[0];

    for (const item of list) {
        if (item > result) {
            result = item;
        }
    }

    return result;
}

function main() {
    const numberList = [34, 50, 25, 100, 65];
    const result = largest(numberList);
    console.log(`The largest number is ${result}`);

    const numberList2 = [102, 34, 6000, 89, 54, 2, 43, 8];
    const result2 = largest(numberList2);
    console.log(`The largest number is ${result2}`);
}

main();
