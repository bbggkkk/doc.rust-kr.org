// [does_not_compile] hosting 모듈은 export했지만, add_to_waitlist 함수는 export하지 않음
namespace front_of_house {
    export namespace hosting {
        // export 없음 → 비공개
        function add_to_waitlist() {}
    }
}

export function eat_at_restaurant() {
    // hosting 모듈에는 접근 가능하지만 add_to_waitlist는 비공개
    // front_of_house.hosting.add_to_waitlist(); // Error: add_to_waitlist가 비공개
}
