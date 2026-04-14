import { Asparagus } from "./garden/vegetables";

// garden 모듈은 별도 파일로 분리 (ES 모듈 방식)
// export * from "./garden"; 와 유사

function main() {
    const plant = new Asparagus();
    console.log(`I'm growing ${JSON.stringify(plant)}!`);
}

main();
