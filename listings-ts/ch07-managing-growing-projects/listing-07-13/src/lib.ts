namespace front_of_house {
    export namespace hosting {
        export function add_to_waitlist() {}
    }
}

// Rust: use crate::front_of_house::hosting::add_to_waitlist;
// 함수를 직접 가져오기 (보편적이지 않은 방식)
const { add_to_waitlist } = front_of_house.hosting;

export function eat_at_restaurant() {
    add_to_waitlist();
}
