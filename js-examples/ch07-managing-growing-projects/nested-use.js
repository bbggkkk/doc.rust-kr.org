// Rust 중첩 경로:
//   use std::{cmp::Ordering, io};
//
// JS에서는 하나의 모듈에서 여러 항목을 구조 분해로 가져옵니다:
import { cmp, io } from 'std';
// 또는 각각 import:
// import { Ordering } from 'std/cmp';
// import io from 'std/io';

// Rust: use std::io::{self, Write};
// JS:
import io, { Write } from 'std/io';
