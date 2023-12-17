import { useEffect, useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import * as SplashScreen from "expo-splash-screen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { View } from "react-native";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const initializeToken = async (onFinish = () => {}) => {
    await new Promise((r) => setTimeout(r, 3000));
    onFinish();
  };

  useEffect(() => {
    console.log("useEffect started");
    initializeToken(() => {
      console.log("Hiding splash screen");
      setIsReady(true);
    });
  }, []);

  if (!isReady) {
    return null;
  }

  return <WelcomeScreen />;
}
