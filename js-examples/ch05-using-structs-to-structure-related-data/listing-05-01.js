// Rust의 struct → JS의 class
class User {
  constructor(active, username, email, signInCount) {
    this.active = active;       // bool → boolean
    this.username = username;   // String → string
    this.email = email;         // String → string
    this.signInCount = signInCount; // u64 → number
  }
}
