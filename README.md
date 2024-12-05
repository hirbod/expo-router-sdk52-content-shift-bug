### Weird SDK52 Bug Report

I discovered a strange bug in SDK52 and managed to reproduce it. Notably, this issue doesn't occur when using React Navigation v7 directly.

https://github.com/user-attachments/assets/44b9e71e-9bb7-4c80-8488-c3983fbbce07

#### Bug Description

- **Scenario**: Navigating from a screen without a header to a screen with a header.
- **Conditions**:
  1. The target screen contains a `ScrollView`.
  2. Interaction with the `ScrollView` causes a layout shift whenever navigating to the target screen.

Initially, I suspected the issue might be related to `react-native-screens`. However, after further testing, I could only reproduce this bug when using **Expo Router** and not with any other configuration.

Here is a proof that it works fine with React Navigation v7:
https://snack.expo.dev/@hirbod/native-stack-navigator-header-to-non-header
