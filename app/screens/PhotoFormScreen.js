import React from "react";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";

export default function PhotoFormScreen() {
  return (
    <AppScreen styles={styles.container}>
      <ImagePickerArray />
      <AppTextInput />
      <AppTextInput />
      <AppTextInput />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});
