function main() {
    print_labeled_measurement(5, 'h');
}

function print_labeled_measurement(value: number, unit_label: string) {
    console.log(`The measurement is: ${value}${unit_label}`);
}

main();
