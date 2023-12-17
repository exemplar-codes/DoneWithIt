import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";

import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import colors from "../config/colors";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export default function PushNotifcationSelfr() {
  const [isPermitted, setIsPermitted] = useState(false);
  const [notifcationToken, setNotifcationToken] = useState(null);
  // not needed for functionality of demo, usually stored and used by server to ping
  // expo notification server

  const [loading, setIsLoading] = useState(false);

  const permissionHandler = async () => {
    // show alert on emulators
    if (!Device.isDevice) {
      alert("Must use physical device for Push Notifications");
    }

    // check if already permitted
    const result = await Notifications.getPermissionsAsync();
    if (result.existingStatus) {
      alert("You've already given permissions, thanks!");
      setIsPermitted(true);
      return;
    }
    // ask for permission
    const { status } = await Notifications.requestPermissionsAsync();
    if (status) {
      setIsPermitted(true);
      return;
    }
  };
  const setupNotificationHandler = async () => {
    const resp = await Notifications.getExpoPushTokenAsync({
      // projectId: "your-project-id",
      //
      // gotten by running .my-scripts/MAD.sh/build_apk
      // link: https://gist.github.com/sanjarcode/92aa6a164d16e51c343eed926047fb1f/a47090fd60037212ca5f6b551ee8d7064fe2ded7
    });

    const token = resp.data;
    console.log(token);
    setNotifcationToken(token);
  };
  const sendNotificationHandler = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "Here is the notification body",
        data: { data: "goes here" },
      },
      trigger: { seconds: 2 },
    });
    console.log("Server pinged fine");
    setIsLoading(true);
    setTimeout(() => {
      console.log("Sould have gotten it by now");
      setIsLoading(false);
    }, 2000);
  }; // client pinging self, not common. for demo purposes.

  // events setup
  // parts are:
  // 1. UI config
  // 2. Hook into the Notification subsystem and listen for events
  // 3. finally, un-hook from the notification subsystem
  const notificationListener = useRef();
  const responseListener = useRef();
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <Screen
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        gap: 24,
      }}
    >
      {Device.isDevice ? (
        <Text style={{ color: "red" }}>Real device. Nice!</Text>
      ) : (
        <Text style={{ color: "red" }}>
          Must use physical device for Push Notifications
        </Text>
      )}

      <AppButton
        title={`Press to setup notifcation permission, current status: ${JSON.stringify(
          isPermitted
        )}`}
        color={colors.primary}
        onPress={permissionHandler}
      />
      <AppButton
        title={`Press to setup notifcation service, current token: ${JSON.stringify(
          notifcationToken
        )}`}
        color={colors.secondary}
        onPress={setupNotificationHandler}
        disabled={isPermitted}
      />
      <AppButton
        title="Press to get notifcation"
        color={colors.danger}
        onPress={sendNotificationHandler}
        disabled={loading && isPermitted && notifcationToken}
      />

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {loading ? (
          <Text style={{ color: "white" }}>Arriving any time now....</Text>
        ) : (
          <>
            <Text style={{ color: "white" }}>
              Title: {notification && notification.request.content.title}{" "}
            </Text>
            <Text style={{ color: "white" }}>
              Body: {notification && notification.request.content.body}
            </Text>
            <Text style={{ color: "white" }}>
              Data:{" "}
              {notification &&
                JSON.stringify(notification.request.content.data)}
            </Text>
          </>
        )}
      </View>
    </Screen>
  );
}
