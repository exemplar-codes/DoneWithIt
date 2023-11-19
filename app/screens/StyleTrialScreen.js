import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";

function StyleTrialScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <Text style={[styles.text, styles.f1, { color: "red" }]}>First font</Text>
      <Text style={[styles.text, styles.f2, { color: "green" }]}>
        Second font
      </Text>
      <Text style={[styles.text, styles.f3, { color: "blue" }]}>
        Third font
      </Text>

      <Text style={[styles.text, styles.test, { color: "dodgerblue" }]}>
        First font
      </Text>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
  },
  ...fonts,
});

const fonts = Platform.select({
  android: {
    f1: {
      fontFamily: "normal",
    },
    f2: {
      fontFamily: "serif",
    },
    f3: {
      fontFamily: "monospace",
    },
    test: { fontFamily: "Roboto" },
  },
  ios: {
    f1: {
      fontFamily: "Georgia",
    },
    f2: {
      fontFamily: "Georgia",
    },
    f3: {
      fontFamily: "Helvetica",
    },
    test: { fontFamily: "Helvetica" },
  },
});

export default StyleTrialScreen;
