import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const initialValues = { email: "", password: "" };
  const onSubmit = (values) => {
    const { email, password } = values;
    console.log({ email, password });
  };

  return (
    <AppScreen styles={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched }) => {
          return (
            <View style={styles.container}>
              <AppTextInput
                icon="email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress" // auto fill from keychain
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              <AppText style={{ color: "red" }}>{errors.email}</AppText>
              <AppTextInput
                icon="lock"
                autoCorrect={false}
                autoCapitalize="none"
                textContentType="password" // auto fill from keychain
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              <AppText style={{ color: "red" }}>{errors.password}</AppText>
              <AppButton title="Login" onPress={handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
