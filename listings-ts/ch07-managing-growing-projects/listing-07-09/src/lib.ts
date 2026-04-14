namespace back_of_house {
    export class Breakfast {
        toast: string;          // public (export와 유사)
        private seasonal_fruit: string;  // private

        private constructor(toast: string, seasonal_fruit: string) {
            this.toast = toast;
            this.seasonal_fruit = seasonal_fruit;
        }

        static summer(toast: string): Breakfast {
            return new Breakfast(toast, "peaches");
        }
    }
}

export function eat_at_restaurant() {
    // 호밀 (Rye) 토스트를 곁들인 여름철 조식 주문하기
    const meal = back_of_house.Breakfast.summer("Rye");
    // 먹고 싶은 빵 바꾸기
    meal.toast = "Wheat";
    console.log(`I'd like ${meal.toast} toast please`);

    // 다음 라인의 주석을 해제하면 컴파일되지 않습니다
    // meal.seasonal_fruit = "blueberries"; // Error: private 속성
}
