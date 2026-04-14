// Rust: use std::fmt::Result;
// Rust: use std::io::Result as IoResult;
// TypeScript에서는 import 시 as로 이름 변경 가능
import { Result } from "fmt";
import { Result as IoResult } from "io";

function function1(): Result {
    // --생략--
}

function function2(): IoResult {
    // --생략--
}
