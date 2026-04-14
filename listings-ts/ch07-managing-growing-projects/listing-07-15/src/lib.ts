// Rust: use std::fmt; / use std::io;
// TypeScript에서는 같은 이름의 타입을 구분하기 위해 모듈 경로를 명시
import * as fmt from "fmt";
import * as io from "io";

function function1(): fmt.Result {
    // --생략--
}

function function2(): io.Result {
    // --생략--
}
