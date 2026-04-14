function deliver_order() {}

namespace back_of_house {
    function fix_incorrect_order() {
        cook_order();
        // Rust의 super:: → 부모 모듈 접근
        // TypeScript에서는 상위 스코프의 함수를 직접 호출 가능
        deliver_order();
    }

    function cook_order() {}
}
