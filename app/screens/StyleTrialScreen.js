import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";

function StyleTrialScreen(props) {
  const f1 = Platform.OS === "android" ? styles.andr1 : styles.ios1;
  const f2 = Platform.OS === "android" ? styles.andr2 : styles.ios2;
  const f3 = Platform.OS === "android" ? styles.andr3 : styles.ios3;
  const test = Platform.OS === "android" ? styles.andrTest : styles.iosTest;

  return (
    <AppScreen style={styles.container}>
      <Text style={[styles.text, f1, { color: "red" }]}>First font</Text>
      <Text style={[styles.text, f2, { color: "green" }]}>Second font</Text>
      <Text style={[styles.text, f3, { color: "blue" }]}>Third font</Text>

      <Text style={[styles.text, test, { color: "dodgerblue" }]}>
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
  andr1: { fontFamily: "normal" },
  andr2: { fontFamily: "serif" },
  andr3: { fontFamily: "monospace" },
  andrTest: { fontFamily: "Roboto" }, // same as 'normal'
  //
  ios1: {
    fontFamily: "Arial",
  },
  ios2: {
    fontFamily: "Georgia",
  },
  ios3: {
    fontFamily: "Georgia",
  },
  iosTest: {
    fontFamily: "Helvetica",
  },
});
export default StyleTrialScreen;
