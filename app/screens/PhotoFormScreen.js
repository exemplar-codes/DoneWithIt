import React from "react";
import AppScreen from "../components/AppScreen";
import { StyleSheet, Text } from "react-native";

export default function PhotoFormScreen() {
  return (
    <AppScreen styles={styles.container}>
      <Text>PhotoFormScreen</Text>
      {/* <ImageInputList />  multi image picker */}
      {/* <AppTextInput /> */}
      {/* dropdown */}
      {/* <AppTextInput /> */}
      {/* + validation */}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
});
