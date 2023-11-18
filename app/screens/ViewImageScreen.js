import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppScreen from "../components/AppScreen";
import colors from "../config/colors";

function ViewImageScreen({ imgUrl = "../assets/chair.jpg", ...rest }) {
  return (
    <AppScreen style={styles.container}>
      <View aria-label="buttons-at-the-top" style={styles.buttonsContainer}>
        <View style={[styles.button, styles.leftButton]}></View>
        <View style={[styles.button, styles.rightButton]}></View>
      </View>

      <Image
        resizeMethod="scale"
        style={styles.image}
        source={
          true || imgUrl?.startsWith(".")
            ? require("../assets/chair.jpg")
            : { uri: imgUrl, ...rest }
        }
      ></Image>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    // fix height to percentage
    height: "70%",
    width: "100%",
  },

  buttonsContainer: {
    alignSelf: "stretch",

    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",

    marginTop: "5%",
    marginBottom: "15%",
  },

  button: { height: 50, width: 50, borderRadius: 1 },
  leftButton: { backgroundColor: colors.primary },
  rightButton: { backgroundColor: colors.secondary },
});
export default ViewImageScreen;
