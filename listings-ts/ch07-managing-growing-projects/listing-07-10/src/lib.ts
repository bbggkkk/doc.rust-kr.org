namespace back_of_house {
    // Rust에서 pub enum은 모든 배리언트가 공개됨
    // TypeScript의 enum은 기본적으로 모두 공개
    export enum Appetizer {
        Soup,
        Salad,
    }
}

export function eat_at_restaurant() {
    const order1 = back_of_house.Appetizer.Soup;
    const order2 = back_of_house.Appetizer.Salad;
}
