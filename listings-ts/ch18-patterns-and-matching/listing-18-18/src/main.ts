let settingValue: number | null = 5;
const newSettingValue: number | null = 10;

// 중첩된 _ → 값의 존재만 확인하고 내부 값은 무시
if (settingValue !== null && newSettingValue !== null) {
  console.log("Can't overwrite an existing customized value");
} else {
  settingValue = newSettingValue;
}

console.log(`setting is ${settingValue}`);
