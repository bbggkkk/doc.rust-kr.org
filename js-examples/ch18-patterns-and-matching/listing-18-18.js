// Rust의 중첩된 _ 패턴 → JS의 조건문

let settingValue = 5;
const newSettingValue = 10;

if (settingValue != null && newSettingValue != null) {
  console.log("Can't overwrite an existing customized value");
} else {
  settingValue = newSettingValue;
}

console.log(`setting is ${settingValue}`);
