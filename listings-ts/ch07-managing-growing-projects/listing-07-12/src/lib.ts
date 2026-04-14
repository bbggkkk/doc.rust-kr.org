// [does_not_compile] use는 선언된 스코프에서만 유효
namespace front_of_house {
    export namespace hosting {
        export function add_to_waitlist() {}
    }
}

// 이 별칭은 이 스코프에서만 유효
const hosting = front_of_house.hosting;

namespace customer {
    export function eat_at_restaurant() {
        // hosting은 이 스코프에서 접근 불가
        // hosting.add_to_waitlist(); // Error: 'hosting'을 찾을 수 없음
    }
}
