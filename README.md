### Weird SDK52 Bug Report

I discovered a strange bug in SDK52 and managed to reproduce it. Notably, this issue doesn't occur when using React Navigation v7 directly.

<video src="https://github.com/hirbod/expo-router-sdk52-content-shift-bug/blob/main/video.mp4" controls width="250">
  Your browser does not support the video tag.
</video>

#### Bug Description

- **Scenario**: Navigating from a screen without a header to a screen with a header.
- **Conditions**:
  1. The target screen contains a `ScrollView`.
  2. Interaction with the `ScrollView` causes a layout shift whenever navigating to the target screen.

Initially, I suspected the issue might be related to `react-native-screens`. However, after further testing, I could only reproduce this bug when using **Expo Router** and not with any other configuration.

Here is a proof that it works fine with React Navigation v7:
https://snack.expo.dev/@hirbod/native-stack-navigator-header-to-non-header
