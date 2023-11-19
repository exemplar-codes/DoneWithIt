import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";

export default function IconsTrialScreen() {
  return (
    <AppScreen style={styles.container}>
      <MaterialCommunityIcons name="email" size={100} color="royalblue" />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
