import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "../components/AppScreen";

function StyleTrialScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <View style={[styles.outerBox, styles.outerBoxPadding]}>
        <View style={styles.box}>
          <Text style={styles.textMargin}>Hi!(margin 20)</Text>
        </View>
        <Text>Hi!(padding 20)</Text>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  outerBox: {
    width: 200,
    height: 200,
    backgroundColor: "lightgreen",
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

  outerBoxPadding: {
    padding: "8%",
  },

  textMargin: {
    margin: 10,
  },
});
export default StyleTrialScreen;
