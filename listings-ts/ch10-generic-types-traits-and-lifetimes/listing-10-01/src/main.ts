function main() {
    const numberList = [34, 50, 25, 100, 65];

    let largest = numberList[0];

    for (const number of numberList) {
        if (number > largest) {
            largest = number;
        }
    }

    console.log(`The largest number is ${largest}`);
}

main();
