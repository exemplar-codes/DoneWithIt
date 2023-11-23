import React from "react";
import colors from "../config/colors";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function AppButton({
  title = "MyButtonText",
  onPress = () => {
    console.log("Button pressed");
  },
  compact = false,
  bgColor = colors.primary,
  textColor = colors.white,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        compact ? {} : { alignSelf: "stretch" },
        { backgroundColor: bgColor, color: textColor },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.titleStyles, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
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
