namespace front_of_house {
    export namespace hosting {
        export function add_to_waitlist() {}
    }
}

// Rust: use crate::front_of_house::hosting;
// TypeScript: import 또는 별칭 할당
const hosting = front_of_house.hosting;

export function eat_at_restaurant() {
    hosting.add_to_waitlist();
}
