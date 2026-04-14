function main() {
    const c = 'z';
    const z: string = '\u2124'; // 'ℤ' - TS에서는 char 타입이 없고 string을 사용
    const heart_eyed_cat = '\u{1F63B}'; // '😻'
}

main();
