import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View aria-label="main-content" style={styles.mainContent}>
        <View aria-label="logo-and-tagline" style={styles.logoAndTagline}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text>Sell What You Don't need</Text>
        </View>
      </View>
      <View style={[styles.button, styles.loginButton]} />
      <View style={[styles.button, styles.signupButton]} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoAndTagline: {
    alignItems: "center",
    marginTop: "20%",
  },
  button: {
    width: "100%",
    flexBasis: 70,
  },
  loginButton: {
    backgroundColor: colors.primary,
  },
  signupButton: {
    backgroundColor: colors.secondary,
  },
  mainContent: {
    flex: 1,
  },
});

export default WelcomeScreen;
