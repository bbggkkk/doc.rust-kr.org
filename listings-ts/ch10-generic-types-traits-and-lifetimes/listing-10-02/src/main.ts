function main() {
    const numberList = [34, 50, 25, 100, 65];

    let largest = numberList[0];

    for (const number of numberList) {
        if (number > largest) {
            largest = number;
        }
    }

    console.log(`The largest number is ${largest}`);

    const numberList2 = [102, 34, 6000, 89, 54, 2, 43, 8];

    let largest2 = numberList2[0];

    for (const number of numberList2) {
        if (number > largest2) {
            largest2 = number;
        }
    }

    console.log(`The largest number is ${largest2}`);
}

main();
