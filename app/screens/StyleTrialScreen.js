import React from "react";
import { StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";

function StyleTrialScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <View style={[styles.box, styles.border, styles.shadow]}></View>
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
    backgroundColor: "dodgerblue",
  },

  border: {
    borderWidth: 10,
    borderColor: "royalblue",
    borderRadius: 10,
    borderTopColor: "gold",
  },

  shadow: {
    // ios only
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 10,
      height: 10,
    },

    // android only
    elevation: 20,
  },
});
export default StyleTrialScreen;
