namespace front_of_house {
    export namespace hosting {
        export function add_to_waitlist() {}
    }
}

export function eat_at_restaurant() {
    // 절대 경로
    front_of_house.hosting.add_to_waitlist();

    // 상대 경로
    front_of_house.hosting.add_to_waitlist();
}
