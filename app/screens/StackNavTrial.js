import React, { useEffect, useState } from "react";
import { View, Button, Text, Dimensions, StyleSheet } from "react-native";
import AppScreen from "../components/AppScreen";

import {
  NavigationContainer,
  useNavigationState,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppButton from "../components/AppButton";

const HomeScreen1 = ({ navigation }) => {
  return (
    <AppScreen style={{ backgroundColor: "dodgerblue", ...styles.center }}>
      <Text>Home screen</Text>
      <AppButton
        onPress={() => {
          navigation.push("HomeScreen1");
        }}
        title="Go to Home 1"
        compact
      />
      <AppButton
        onPress={() => {
          navigation.reset("ProfileScreen2");
        }}
        title="Go to Profile 2"
        compact
      />
      <AppButton
        onPress={() => {
          navigation.push("SettingsScreen3");
        }}
        title="Go to Settings 3"
        compact
      />
    </AppScreen>
  );
};

const ProfileScreen2 = ({ navigation }) => {
  return (
    <AppScreen style={{ backgroundColor: "gold", ...styles.center }}>
      <Text>Profile screen</Text>
      <AppButton
        onPress={() => {
          navigation.push("HomeScreen1");
        }}
        title="Go to Home 1"
        compact
      />
      {/* <AppButton onPress={() => {navigation.push('ProfileScreen2')}}   title="Go to Profile 2" compact /> */}
      <AppButton
        onPress={() => {
          navigation.push("SettingsScreen3");
        }}
        title="Go to Settings 3"
        compact
      />
    </AppScreen>
  );
};

const SettingsScreen3 = ({ navigation }) => {
  return (
    <AppScreen style={{ backgroundColor: "gray", ...styles.center }}>
      <Text>Settings screen</Text>
      <AppButton
        onPress={() => {
          navigation.reset("HomeScreen1");
        }}
        title="Go to Home 1 reset"
        compact
      />
      <AppButton
        onPress={() => {
          navigation.push("ProfileScreen2");
        }}
        title="Go to Profile 2"
        compact
      />
      {/* <AppButton onPress={() => {navigation.push('SettingsScreen3')}}   title="Go to Settings 3" compact /> */}
    </AppScreen>
  );
};

const Stack = createNativeStackNavigator();

const HouseKeepComponent = () => {
  const navState = useNavigationState((x) => x);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((p) => p + 1);
    }, 2000);
  }, []);

  console.log(navState);
  console.log("length", navState?.routes?.length);
  return null;
};
export default function StackNavTrial() {
  return (
    <NavigationContainer>
      <HouseKeepComponent />
      <Stack.Navigator initialRouteName="HomeScreen1">
        <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
        <Stack.Screen name="ProfileScreen2" component={ProfileScreen2} />
        <Stack.Screen name="SettingsScreen3" component={SettingsScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});

// observing outputs
const initNavState = {
  index: 0,
  key: "stack-3aEw_hgGqf4EBuDX9IggW",
  routeNames: ["HomeScreen", "ProfileScreen", "SettingsScreen"],
  routes: [
    {
      key: "HomeScreen-I0PYS-Rbysqdhkxew570X",
      name: "HomeScreen",
      params: undefined,
    },
  ],
  stale: false,
  type: "stack",
};

const oneLayerNavState = {
  index: 1,
  key: "stack-G0xfxnJzx3CwAG6v21KgV",
  routeNames: ["HomeScreen", "ProfileScreen", "SettingsScreen"],
  routes: [
    {
      key: "HomeScreen-0U_HwEMM9sKaNpqFqFqNl",
      name: "HomeScreen",
      params: undefined,
    },
    {
      key: "ProfileScreen--gS6I95rFOge1d-l-bjhZ",
      name: "ProfileScreen",
      params: undefined,
      path: undefined,
    },
  ],
  stale: false,
  type: "stack",
};
