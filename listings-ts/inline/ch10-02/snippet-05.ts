// T: Summary + Display -> T extends Summary & Display
function notify<T extends Summary & Display>(item: T): void {
    // ...
}
