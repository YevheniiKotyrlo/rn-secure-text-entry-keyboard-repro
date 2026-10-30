# Android TextInput shows a secureTextEntry password in clear

![Build](https://github.com/YevheniiKotyrlo/rn-secure-text-entry-keyboard-repro/workflows/Pre%20Merge%20Checks/badge.svg)

React Native 0.89.0-nightly-20261030-4afc5d5b9, from the [React Native reproducer template](https://github.com/react-native-community/reproducer-react-native). `App.tsx` renders three fields that each pass `secureTextEntry` and hold `hunter2`.

## Steps

1. Build and install the release APK: `cd ReproducerApp/android && ./gradlew assembleRelease && adb install -r app/build/outputs/apk/release/app-release.apk`.
2. Open the app. Field 1 (`secureTextEntry`) is masked. Field 2 (`secureTextEntry` with `keyboardType="email-address"`) shows `hunter2`.
3. Tap **Show**, then **Hide**. Field 3 (`secureTextEntry` with `autoCapitalize="characters"`) keeps showing `hunter2` while its label reads `secureTextEntry=true`.

With each field focused, `adb shell dumpsys input_method` reads `inputType=0x4081` for field 1, `inputType=0x40a1` (`TYPE_TEXT_VARIATION_WEB_EDIT_TEXT`) for field 2, and after step 3 `inputType=0x1011` (`TYPE_TEXT_VARIATION_URI`) for field 3.
