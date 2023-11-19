import React from "react";
import colors from "../config/colors";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function AppButton({
  title = "MyButtonText",
  onPress = () => {
    console.log("Button pressed");
  },
  compact = false,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, compact ? {} : { alignSelf: "stretch" }]}
      onPress={onPress}
    >
      <Text style={styles.titleStyles}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 45,
    paddingVertical: 15,
  },
  titleStyles: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
