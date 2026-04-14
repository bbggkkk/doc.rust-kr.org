// Rust의 mod는 TypeScript의 namespace 또는 ES 모듈에 해당
namespace front_of_house {
    namespace hosting {
        function add_to_waitlist() {}

        function seat_at_table() {}
    }

    namespace serving {
        function take_order() {}

        function serve_order() {}

        function take_payment() {}
    }
}
