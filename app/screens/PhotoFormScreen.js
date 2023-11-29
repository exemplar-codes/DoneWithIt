import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import AppScreen from "../components/AppScreen";
import ImageInput from "../components/ImageInput";

export default function PhotoFormScreen() {
  const [image, setImage] = useState();
  const [removed, setIsRemoved] = useState(false);
  return (
    <AppScreen style={styles.container}>
      {/* <Text
        style={{
          backgroundColor: "red",
        }}
      >
        PhotoFormScreen
      </Text> */}
      <Text>Uncontrolled (works!)</Text>
      <ImageInput />

      <Text>---</Text>
      <Text>Controlled</Text>
      <Text>Removed: {`${removed}`}</Text>
      <ImageInput
        image={image}
        onAdd={(uri) => setImage(uri)}
        onRemove={(uri) => {
          setImage(null);
          setIsRemoved(true);
        }}
      />
      {/* <ImageInputList />  multi image picker */}
      {/* <AppTextInput /> */}
      {/* dropdown */}
      {/* <AppTextInput /> */}
      {/* + validation */}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
