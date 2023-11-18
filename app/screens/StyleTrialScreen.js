import React from "react";
import { StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";

function StyleTrialScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <View style={[styles.box, styles.shadowTrial]}></View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "dodgerblue",
    borderColor: "royalblue",
    borderWidth: 10,
    borderTopColor: "gold",
  },
});
export default StyleTrialScreen;
